import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeUserTokenRepository from '../repositories/fakes/FakeUserTokenRepository';
import FakeHashProvider from '../providers/HashProviders/fakes/FakeHashProvider';

import ResetPwdService from './ResetPwdService';

let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokenRepository: FakeUserTokenRepository;
let resetPwdService: ResetPwdService;
let fakeHashProvider: FakeHashProvider;

describe('ResetPwdService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeUserTokenRepository = new FakeUserTokenRepository();
    fakeHashProvider = new FakeHashProvider();

    resetPwdService = new ResetPwdService(
      fakeUsersRepository,
      fakeUserTokenRepository,
      fakeHashProvider,
    );
  });

  it('resetar senha do usuário', async () => {
    const getUser = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123456',
    });

    const { token } = await fakeUserTokenRepository.generate({
      user_id: getUser.id,
    });

    const hashProvider = jest.spyOn(fakeHashProvider, 'generateHash');
    await resetPwdService.execute({ token, password: '112233' });

    const user = await fakeUsersRepository.findById({ id: getUser.id });

    expect(user?.password).toBe('112233');
    expect(hashProvider).toHaveBeenCalled();
  });

  it('não resetar senha de tokens inexistentes', async () => {
    await expect(
      resetPwdService.execute({ token: 'lkjsdflk', password: '112233' }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('não resetar senha de usuário inexistente', async () => {
    const { token } = await fakeUserTokenRepository.generate({
      user_id: 'user-inesistente',
    });

    await expect(
      resetPwdService.execute({ token, password: '112233' }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('não resetar senha depois de 2 horas', async () => {
    const getUser = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123456',
    });

    const { token } = await fakeUserTokenRepository.generate({
      user_id: getUser.id,
    });

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      const customDate = new Date();
      return customDate.setHours(customDate.getHours() + 3);
    });

    await expect(
      resetPwdService.execute({ token, password: '112233' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
