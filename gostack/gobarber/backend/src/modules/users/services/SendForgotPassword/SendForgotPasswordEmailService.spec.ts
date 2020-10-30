import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository'
import FakeUserTokensRepository from '@modules/users/repositories/fakes/FakeUserTokensRepository'
import FakeEncrypt from '@modules/users/providers/Encrypt/fakes/FakeEncrypt'
import FakeSendMail from '@shared/container/providers/SendMails/fakes/FakeSendMail'

import CreateUserService from '../CreateUser/CreateUserService'
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService'

let fakeUsersRepository: FakeUsersRepository
let fakeUserTokensRepository: FakeUserTokensRepository
let fakeEncrypt: FakeEncrypt
let fakeSendMail: FakeSendMail

let createUserService: CreateUserService
let sendForgotPasswordEmailService: SendForgotPasswordEmailService

describe('SendForgotPassword', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()
    fakeUserTokensRepository = new FakeUserTokensRepository()
    fakeEncrypt = new FakeEncrypt()
    fakeSendMail = new FakeSendMail()

    createUserService = new CreateUserService(fakeUsersRepository, fakeEncrypt)

    sendForgotPasswordEmailService = new SendForgotPasswordEmailService(
      fakeUsersRepository,
      fakeSendMail,
      fakeUserTokensRepository
    )
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
    const generateToken = jest.spyOn(fakeUserTokensRepository, 'generate')

    await createUserService.execute({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123'
    })

    await sendForgotPasswordEmailService.execute({ email: 'john@mail.com' })

    expect(generateToken).toHaveBeenCalled()
  })
})
