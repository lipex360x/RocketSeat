import { inject, injectable } from 'tsyringe'

import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'
import IUserTokensRepository from '@modules/users/repositories/interfaces/IUserTokensRepository'
import AppError from '@shared/errors/AppError'

interface Request {
  token: string
  password: string
}

@injectable()
export default class SendForgotPasswordEmailService {
  constructor (
    @inject('UsersRepository')
    private repository: IUsersRepository,

    @inject('UserToken')
    private userToken: IUserTokensRepository
  ) {}

  async execute ({ token, password }:Request): Promise<void> {
    const getUserToken = await this.userToken.findByToken({ token })

    if (!getUserToken) {
      throw new AppError('User Token does not exists')
    }
    const getUser = await this.repository.findById({ id: getUserToken.user_id })

    if (!getUser) {
      throw new AppError('User does not exists')
    }

    getUser.password = password

    await this.repository.save({ user: getUser })
  }
}
