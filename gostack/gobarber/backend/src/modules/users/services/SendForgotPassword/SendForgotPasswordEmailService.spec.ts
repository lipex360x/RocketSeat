import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository'
import FakeEncrypt from '@modules/users/providers/Encrypt/fakes/FakeEncrypt'
import FakeSendMail from '@shared/container/providers/SendMails/fakes/FakeSendMail'
import FakeUserTokens from '@modules/users/repositories/fakes/FakeUserTokens'

import CreateUserService from '../CreateUser/CreateUserService'
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService'

let fakeUsersRepository: FakeUsersRepository
let fakeEncrypt: FakeEncrypt
let fakeSendMail: FakeSendMail

let createUserService: CreateUserService
let sendForgotPasswordEmailService: SendForgotPasswordEmailService

describe('SendForgotPassword', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    fakeEncrypt = new FakeEncrypt()
    fakeSendMail = new FakeSendMail()

    sendForgotPasswordEmailService = new SendForgotPasswordEmailService(fakeUsersRepository, fakeSendMail)
    createUserService = new CreateUserService(fakeUsersRepository, fakeEncrypt)
  })

  it('should be able to recover the password using email', async () => {
    const sendMail = jest.spyOn(fakeSendMail, 'sendMail')

    await createUserService.execute({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123'
    })

    await sendForgotPasswordEmailService.execute({ email: 'john@mail.com' })

    expect(sendMail).toHaveBeenCalled()
  })

  it('should not be able to recover a non-existing user password', async () => {
    await expect(
      sendForgotPasswordEmailService.execute({ email: 'john@mail.com' })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should generate a forgot password token', async () => {
    await createUserService.execute({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123'
    })
  })
})
