import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import User from '@modules/users/entities/User'
import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import IStorageFiles from '@shared/container/providers/StorageFiles/models/IStorageFiles'

interface Request {
  user_id: string
  avatarFilename: string
}

@injectable()
export default class UpdateAvatarService {
  constructor (
    @inject('UsersRepository')
    private repository: IUsersRepository,

    @inject('StorageFiles')
    private storage: IStorageFiles
  ) {}

  async execute ({ user_id, avatarFilename }:Request): Promise<User> {
    const getUser = await this.repository.findById({ id: user_id })

    if (!getUser) {
      throw new AppError('Only authenticated users can change avatar')
    }

    if (getUser.avatar) {
      await this.storage.deleteFile({ file: getUser.avatar })
    }

    const filename = await this.storage.saveFile({ file: avatarFilename })
    getUser.avatar = filename

    await this.repository.save({ user: getUser })

    return getUser
  }
}
