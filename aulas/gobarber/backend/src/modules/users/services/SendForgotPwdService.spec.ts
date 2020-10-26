import AppError from '@shared/errors/AppError';

import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeUserTokenRepository from '../repositories/fakes/FakeUserTokenRepository';

import SendForgotPwdService from './SendForgotPwdService';

let fakeMailProvider: FakeMailProvider;
let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokenRepository: FakeUserTokenRepository;
let sendForgotPwd: SendForgotPwdService;

describe('SendForgotPwdService', () => {
  beforeEach(() => {
    fakeMailProvider = new FakeMailProvider();
    fakeUsersRepository = new FakeUsersRepository();
    fakeUserTokenRepository = new FakeUserTokenRepository();

    sendForgotPwd = new SendForgotPwdService(
      fakeUsersRepository,
      fakeMailProvider,
      fakeUserTokenRepository,
    );
  });
  it('enviar email de reset de senha', async () => {
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123456',
    });

    await sendForgotPwd.execute({
      email: 'john@mail.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });

  it('recuperar senha de um usuário inesistênte', async () => {
    await expect(
      sendForgotPwd.execute({
        email: 'john@mail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('gerar um token para validar link', async () => {
    const generateToken = jest.spyOn(fakeUserTokenRepository, 'generate');

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123456',
    });

    await sendForgotPwd.execute({
      email: 'john@mail.com',
    });

    expect(generateToken).toHaveBeenCalledWith({ user_id: user.id });
  });
});
