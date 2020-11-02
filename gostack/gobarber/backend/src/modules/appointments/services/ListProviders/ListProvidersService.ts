import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import User from '@modules/users/entities/User'

import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'

interface Request {
  except_user_id?: string
}

@injectable()
export default class ListProvidersService {
  constructor (
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}

  async execute ({ except_user_id }:Request): Promise<User[]> {
    const getUser = await this.repository.findAllProviders({ except_user_id })

    return getUser
  }
}
