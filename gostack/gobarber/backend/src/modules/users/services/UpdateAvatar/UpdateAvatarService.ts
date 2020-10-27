import { getRepository } from 'typeorm'
import fs from 'fs'
import path from 'path'

import AppError from '@shared/errors/AppError'
import uploadConfig from '@config/upload.config'
import User from '@modules/users/entities/User'

interface Request {
  user_id: string
  avatarFilename: string
}

export default class UpdateAvatarService {
  async execute ({ user_id, avatarFilename }:Request): Promise<User> {
    const repository = getRepository(User)

    const getUser = await repository.findOne(user_id)

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

    await repository.save(getUser)

    return getUser
  }
}
