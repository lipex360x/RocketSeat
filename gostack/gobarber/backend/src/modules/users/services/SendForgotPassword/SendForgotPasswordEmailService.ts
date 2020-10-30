import AppError from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'
import ISendMail from '@shared/container/providers/SendMails/interfaces/ISendMails'

interface Request {
  email: string
}

@injectable()
export default class SendForgotPasswordEmailService {
  constructor (
    @inject('UsersRepository')
    private repository: IUsersRepository,

    @inject('SendMail')
    private sendMail: ISendMail
  ) {}

  async execute ({ email }:Request): Promise<void> {
    const getUser = await this.repository.findByEmail({ email })

    if (!getUser) {
      throw new AppError('User does not exists')
    }
    await this.sendMail.sendMail({ to: email, body: '<p>Pedido de recuperação de senha</p>' })
  }
}
