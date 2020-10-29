import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository'
import FakeEncrypt from '@modules/users/providers/Encrypt/fakes/FakeEncrypt'
import CreateUserService from './CreateUserService'

let fakeUsersRepository: FakeUsersRepository
let fakeEncrypt: FakeEncrypt
let createUserService: CreateUserService

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    fakeEncrypt = new FakeEncrypt()
    createUserService = new CreateUserService(fakeUsersRepository, fakeEncrypt)
  })

  it('should be able to create a new user', async () => {
    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123'
    })

    expect(user).toHaveProperty('id')
  })

  it('should not be able to create a user with repeated email', async () => {
    await createUserService.execute({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123'
    })

    expect(
      createUserService.execute({
        name: 'John Doe',
        email: 'john@mail.com',
        password: '123'
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
