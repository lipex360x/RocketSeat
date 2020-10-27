import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import User from '@modules/users/entities/User'

interface Request {
  email: string
  password: string
}

interface Response{
  user: User
  token: string
}
export default class CreateSessionService {
  async execute ({ email, password }:Request): Promise<Response> {
    const repository = getRepository(User)

    const getUser = await repository.findOne({ where: { email } })

    if (!getUser) {
      throw Error('Incorrect email/password combination')
    }

    const passwordMached = await compare(password, getUser.password)
    if (!passwordMached) {
      throw Error('Incorrect email/password combination')
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