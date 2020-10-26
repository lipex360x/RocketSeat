import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IHashProvider from '@modules/users/providers/HashProviders/models/IHashProvider';

import User from '@modules/users/infra/typeorm/entities/User';

import IUsersRepository from '../repositories/models/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUser = await this.repository.findByEmail({ email });

    if (checkUser) {
      throw new AppError('Email address already used');
    }
    const hashedPassword = await this.hashProvider.generateHash({ password });

    const user = await this.repository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
