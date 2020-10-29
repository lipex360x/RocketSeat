import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository'
import CreateUserService from '@modules/users/services/CreateUser/CreateUserService'
import CreateSessionService from './CreateSessionService'

let fakeUsersRepository: FakeUsersRepository
let createUserService: CreateUserService
let createSessionService: CreateSessionService

describe('CreateSession', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    createUserService = new CreateUserService(fakeUsersRepository)
    createSessionService = new CreateSessionService(fakeUsersRepository)
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
})