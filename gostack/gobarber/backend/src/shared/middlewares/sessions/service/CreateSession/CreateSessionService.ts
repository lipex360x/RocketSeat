import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import AppError from '@shared/errors/AppError'
import User from '@modules/users/entities/User'
import IUsersRepository from '@modules/users/repositories/IUsersRepository'

interface Request {
  email: string
  password: string
}

interface Response{
  user: User
  token: string
}
export default class CreateSessionService {
  constructor (private repository: IUsersRepository) { }

  async execute ({ email, password }:Request): Promise<Response> {
    const getUser = await this.repository.findByEmail({ email })

    if (!getUser) {
      throw new AppError('Incorrect email/password combination', 407)
    }

    const passwordMached = await compare(password, getUser.password)
    if (!passwordMached) {
      throw new AppError('Incorrect email/password combination', 407)
    }

    const token = sign({}, process.env.JWT_TOKEN, {
      subject: getUser.id,
      expiresIn: process.env.JWT_EXPIRES
    })

    return {
      user: getUser,
      token
    }
  }
}
