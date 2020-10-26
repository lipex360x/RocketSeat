import { isAfter, addHours } from 'date-fns';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/models/IUsersRepository';
import IUserTokenRepository from '../repositories/models/IUserTokenRepository';
import IHashProvider from '../providers/HashProviders/models/IHashProvider';

interface IRequest {
  token: string;
  password: string;
}

@injectable()
export default class ResetPwdService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokenRepository')
    private userTokenRepository: IUserTokenRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ token, password }: IRequest): Promise<void> {
    const getUserToken = await this.userTokenRepository.findByToken({ token });
    if (!getUserToken) {
      throw new AppError('Token do usuário inexistente');
    }

    const getUser = await this.usersRepository.findById({
      id: getUserToken.user_id,
    });
    if (!getUser) {
      throw new AppError('Usuário inexistente');
    }

    const tokenCreatedAt = getUserToken.created_at;
    const compareDate = addHours(tokenCreatedAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expirado');
    }

    const hashedPassword = await this.hashProvider.generateHash({ password });

    getUser.password = hashedPassword;

    await this.usersRepository.save({ user: getUser });
  }
}
