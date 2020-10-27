import User from '../../entities/User'
import { getRepository } from 'typeorm'

interface Request {
  name: string
  email: string
  password: string
}

export default class CreateUserService {
  async execute ({ name, email, password }:Request): Promise<User> {
    const repository = getRepository(User)

    const getUser = await repository.findOne({ where: { email } })

    if (getUser) {
      throw new Error('Email address already used')
    }

    const newUser = repository.create({ name, email, password })

    await repository.save(newUser)

    return newUser
  }
}
