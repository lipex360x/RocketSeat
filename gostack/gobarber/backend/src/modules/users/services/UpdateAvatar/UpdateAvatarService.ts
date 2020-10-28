import fs from 'fs'
import path from 'path'

import AppError from '@shared/errors/AppError'
import uploadConfig from '@config/upload.config'
import User from '@modules/users/entities/User'
import IUsersRepository from '@modules/users/repositories/IUsersRepository'

interface Request {
  user_id: string
  avatarFilename: string
}

export default class UpdateAvatarService {
  constructor (private repository: IUsersRepository) { }

  async execute ({ user_id, avatarFilename }:Request): Promise<User> {
    const getUser = await this.repository.findById({ id: user_id })

    if (!getUser) {
      throw new AppError('Only authenticated users can change avatar')
    }

    if (getUser.avatar) {
      const userAvatarFile = path.join(uploadConfig.tmpFolder, getUser.avatar)

      const userAvatar = await fs.promises.stat(userAvatarFile)

      if (userAvatar) {
        await fs.promises.unlink(userAvatarFile)
      }
    }

    getUser.avatar = avatarFilename

    await this.repository.save({ user: getUser })

    return getUser
  }
}
