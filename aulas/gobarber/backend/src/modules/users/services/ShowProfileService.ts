import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';

import IUsersRepository from '../repositories/models/IUsersRepository';

interface IRequest {
  user_id: string;
}

@injectable()
export default class ShowProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User | undefined> {
    const getUser = await this.usersRepository.findById({ id: user_id });

    if (!getUser) {
      throw new AppError('Usuário não encontrado');
    }

    return getUser;
  }
}
