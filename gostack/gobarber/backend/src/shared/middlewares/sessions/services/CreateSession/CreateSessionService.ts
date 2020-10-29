import { inject, injectable } from 'tsyringe'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import sessionConfig from '@config/session.config'

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

@injectable()
export default class CreateSessionService {
  constructor (
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) { }

  async execute ({ email, password }:Request): Promise<Response> {
    const getUser = await this.repository.findByEmail({ email })

    if (!getUser) {
      throw new AppError('Incorrect email', 401)
    }

    const passwordMached = await compare(password, getUser.password)
    if (!passwordMached) {
      throw new AppError('Incorrect password', 401)
    }

    const { secret, expiresIn } = sessionConfig.jwt
    const token = sign({}, secret, {
      subject: getUser.id,
      expiresIn: expiresIn
    })

    return {
      user: getUser,
      token
    }
  }
}