import AppError from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'
import ISendMail from '@shared/container/providers/SendMails/interfaces/ISendMails'
import IUserTokensRepository from '@modules/users/repositories/interfaces/IUserTokensRepository'

interface Request {
  email: string
}

@injectable()
export default class SendForgotPasswordEmailService {
  constructor (
    @inject('UsersRepository')
    private repository: IUsersRepository,

    @inject('SendMail')
    private sendMail: ISendMail,

    @inject('UserTokensRepository')
    private userToken: IUserTokensRepository
  ) {}

  async execute ({ email }:Request): Promise<void> {
    const getUser = await this.repository.findByEmail({ email })

    if (!getUser) {
      throw new AppError('User does not exists')
    }

    await this.userToken.generate({ user_id: getUser.id })

    await this.sendMail.sendMail({ to: email, body: '<p>Pedido de recuperação de senha</p>' })
  }
}
