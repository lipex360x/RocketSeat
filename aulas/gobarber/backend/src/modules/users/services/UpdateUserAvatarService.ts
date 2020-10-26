import { injectable, inject } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/models/IUsersRepository';

interface IRequest {
  user_id: string;
  avatarFilename: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById({ id: user_id });

    if (!user) {
      throw new AppError('Only authenticated user can change avatar', 401);
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile({ file: user.avatar });
    }
    const fileName = await this.storageProvider.saveFile({
      file: avatarFilename,
    });

    user.avatar = fileName;
    await this.usersRepository.save({ user });

    return user;
  }
}

export default UpdateUserAvatarService;
