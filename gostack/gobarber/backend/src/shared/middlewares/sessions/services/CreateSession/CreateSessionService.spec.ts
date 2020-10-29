import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository'
import FakeEncrypt from '@modules/users/providers/Encrypt/fakes/FakeEncrypt'
import CreateUserService from '@modules/users/services/CreateUser/CreateUserService'
import CreateSessionService from './CreateSessionService'

let fakeUsersRepository: FakeUsersRepository
let fakeEncrypt: FakeEncrypt
let createUserService: CreateUserService
let createSessionService: CreateSessionService

describe('CreateSession', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    fakeEncrypt = new FakeEncrypt()
    createUserService = new CreateUserService(fakeUsersRepository, fakeEncrypt)
    createSessionService = new CreateSessionService(fakeUsersRepository, fakeEncrypt)
  })

  it('should be able to create a session', async () => {
    await createUserService.execute({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123456'
    })

    const response = await createSessionService.execute({
      email: 'john@mail.com',
      password: '123456'
    })

    expect(response).toHaveProperty('token')
  })

  it('should not be able to create a session with non existing user', async () => {
    expect(createSessionService.execute({
      email: 'john@mail.com',
      password: '123456'
    })).rejects.toBeInstanceOf(AppError)
  })

  it('not be able to create a session with password is wrong', async () => {
    await createUserService.execute({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '111111'
    })

    expect(createSessionService.execute({
      email: 'john@mail.com',
      password: '123456'
    })).rejects.toBeInstanceOf(AppError)
  })
})
