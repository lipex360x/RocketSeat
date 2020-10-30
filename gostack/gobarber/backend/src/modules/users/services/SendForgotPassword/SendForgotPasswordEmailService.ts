import AppError from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'
import IMailProvider from '@shared/container/providers/MailProvider/interfaces/IMailProvider'
import IUserTokensRepository from '@modules/users/repositories/interfaces/IUserTokensRepository'

interface Request {
  email: string
}

@injectable()
export default class SendForgotPasswordEmailService {
  constructor (
    @inject('UsersRepository')
    private repository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('UserTokensRepository')
    private userToken: IUserTokensRepository
  ) {}

  async execute ({ email }:Request): Promise<void> {
    const getUser = await this.repository.findByEmail({ email })

    if (!getUser) {
      throw new AppError('User does not exists')
    }

    const { token } = await this.userToken.generate({ user_id: getUser.id })

    await this.mailProvider.sendMail({
      to: {
        name: getUser.name,
        email: getUser.email
      },
      subject: '[GoBarber] Recovery Password',
      templateData: {
        template: 'Hello, {{name}} - {{token}}',
        variables: {
          name: getUser.name,
          token
        }
      }
    })
  }
}
