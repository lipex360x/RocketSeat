import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProviders/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfileService: UpdateProfileService;

describe('UpdateProfileService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfileService = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('atualizar perfil do usuário', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password: '123456',
    });

    const updatedUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'John Trê',
      email: 'mail2@mail.com',
    });

    expect(updatedUser.name).toBe('John Trê');
    expect(updatedUser.email).toBe('mail2@mail.com');
  });

  it('não atualizar perfil com email existente', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'Test',
      email: 'test@mail.com',
      password: '123456',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'John Trê',
        email: 'johndoe@mail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('atualizar senha do usuário', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123456',
    });

    const setUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'Foo Bar',
      email: 'mail2@mail.com',
      old_password: '123456',
      password: '123123',
    });

    expect(setUser.password).toBe('123123');
  });

  it('não atualizar se senha antiga não for informada', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123456',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'Foo Bar',
        email: 'mail2@mail.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('não atualizar se senha antiga não for inválida', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'john@mail.com',
      password: '123456',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'Foo Bar',
        email: 'mail2@mail.com',
        old_password: 'senha-errada',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('não atualizar perfil de usuário não encontrado', async () => {
    await expect(
      updateProfileService.execute({
        user_id: 'non-exists',
        name: 'Foo Bar',
        email: 'mail2@mail.com',
        old_password: '112233',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
