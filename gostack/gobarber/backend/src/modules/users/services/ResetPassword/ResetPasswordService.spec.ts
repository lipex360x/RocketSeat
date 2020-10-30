import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository'
import FakeUserTokensRepository from '@modules/users/repositories/fakes/FakeUserTokensRepository'

import ResetPasswordService from './ResetPasswordService'

let fakeUsersRepository: FakeUsersRepository
let fakeUserTokensRepository: FakeUserTokensRepository

let resetPasswordService: ResetPasswordService

describe('ResetPassword', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    fakeUserTokensRepository = new FakeUserTokensRepository()

    resetPasswordService = new ResetPasswordService(fakeUsersRepository, fakeUserTokensRepository)
  })

  it('should be able to reset the password', async () => {
    let user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123'
    })

    const { token } = await fakeUserTokensRepository.generate({ user_id: user.id })

    user = await fakeUsersRepository.findByEmail({ email: user.email })

    await resetPasswordService.execute({ token, password: '456' })

    expect(user.password).toBe('456')
  })
})
