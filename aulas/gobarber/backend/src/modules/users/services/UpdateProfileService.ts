import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';

import IHashProvider from '../providers/HashProviders/models/IHashProvider';

import IUsersRepository from '../repositories/models/IUsersRepository';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

@injectable()
export default class UpdateProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    user_id,
    name,
    email,
    password,
    old_password,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById({ id: user_id });
    if (!user) {
      throw new AppError('Usuário não encontrado');
    }

    const userEmail = await this.usersRepository.findByEmail({ email });
    if (userEmail && userEmail.id !== user_id) {
      throw new AppError('Email em uso por outro usuário');
    }

    user.name = name;
    user.email = email;

    if (password && !old_password) {
      throw new AppError('É necessário informar a senha antiga');
    }

    if (password && old_password) {
      const checkOldPwd = await this.hashProvider.compareHash({
        password: old_password,
        hashedpassword: user.password,
      });

      if (!checkOldPwd) {
        throw new AppError('Senha antiga inválida');
      }
      user.password = await this.hashProvider.generateHash({ password });
    }

    return this.usersRepository.save({ user });
  }
}
