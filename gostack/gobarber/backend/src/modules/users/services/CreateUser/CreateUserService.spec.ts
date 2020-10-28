import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository'

import CreateUserService from './CreateUserService'

let fakeUsersRepository: FakeUsersRepository
let createUserService: CreateUserService

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    createUserService = new CreateUserService(fakeUsersRepository)
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
