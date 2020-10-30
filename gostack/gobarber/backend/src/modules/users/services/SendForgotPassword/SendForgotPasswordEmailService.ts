import AppError from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

import User from '@modules/users/entities/User'
import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import ISendMail from '@shared/container/providers/SendMails/models/ISendMails'

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
    this.sendMail.sendMail({ to: email, body: '<p>Pedido de recuperação de senha</p>' })
  }
}
