import { inject, injectable } from 'tsyringe'
import { hash } from 'bcryptjs'

import AppError from '@shared/errors/AppError'

import User from '@modules/users/entities/User'
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
    private repository: IUsersRepository
  ) {}

  async execute ({ name, email, password }:Request): Promise<User> {
    const getUser = await this.repository.findByEmail({ email })

    if (getUser) {
      throw new AppError('Email address already used')
    }

    const passwordEncrypt = await hash(password, 8)

    const newUser = this.repository.create({
      name,
      email,
      password: passwordEncrypt
    })

    return newUser
  }
}
