import AppError from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

import User from '@modules/users/entities/User'
import IEncrypt from '@modules/users/providers/Encrypt/IEncrypt'
import IUsersRepository from '@modules/users/repositories/IUsersRepository'

interface Request {
  name: string
  email: string
  password: string
}

@injectable()
export default class CreateUserService {
  constructor (
    @inject('UsersRepository')
    private repository: IUsersRepository,

    @inject('Encrypt')
    private encrypt: IEncrypt
  ) {}

  async execute ({ name, email, password }:Request): Promise<User> {
    const getUser = await this.repository.findByEmail({ email })

    if (getUser) {
      throw new AppError('Email address already used')
    }

    const passwordEncrypt = await this.encrypt.encrypt({ payload: password })

    const newUser = this.repository.create({
      name,
      email,
      password: passwordEncrypt
    })

    return newUser
  }
}
