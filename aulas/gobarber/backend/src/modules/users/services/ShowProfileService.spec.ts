import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfileService: ShowProfileService;

describe('ShowProfileService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    showProfileService = new ShowProfileService(fakeUsersRepository);
  });

  it('exibir perfil do usuário', async () => {
    const setUser = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'test@mail.com',
      password: '123456',
    });

    const user = await showProfileService.execute({ user_id: setUser.id });

    expect(user?.name).toBe('John Doe');
  });

  it('não exibir perfil do usuário inexistente', async () => {
    expect(
      showProfileService.execute({ user_id: 'non-exists' }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
