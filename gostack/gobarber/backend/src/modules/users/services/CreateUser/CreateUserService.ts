import AppError from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

import User from '@modules/users/entities/User'
import IEncrypt from '@modules/users/providers/Encrypt/interfaces/IEncrypt'
import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'

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

    const passwordEncrypt = await this.encrypt.generate({ password })

    const newUser = this.repository.create({
      name,
      email,
      password: passwordEncrypt
    })

    return newUser
  }
}
