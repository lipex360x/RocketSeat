import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';
import authConfig from '@config/auth.config';
import AppError from '@shared/errors/AppError';

import User from '@modules/users/infra/typeorm/entities/User';

import IHashProvider from '../providers/HashProviders/models/IHashProvider';
import IUsersRepository from '../repositories/models/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class CreateSessionService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail({ email });
    if (!user) {
      throw new AppError('User or Password invalid', 401);
    }

    const passwordMatch = await this.hashProvider.compareHash({
      password,
      hashedpassword: user.password,
    });
    if (!passwordMatch) {
      throw new AppError('User or Password invalid', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

export default CreateSessionService;
