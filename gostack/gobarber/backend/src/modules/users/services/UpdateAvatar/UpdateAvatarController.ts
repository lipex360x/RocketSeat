import { container } from 'tsyringe'
import { Request, Response } from 'express'

import UpdateAvatarService from './UpdateAvatarService'

export default class UpdateAvatarController {
  async update (request: Request, response: Response): Promise<Response> {
    const avatarFile = request.file.filename
    const { id } = request.user

    const updateAvatar = container.resolve(UpdateAvatarService)

    const user = await updateAvatar.execute({
      avatarFilename: avatarFile,
      user_id: id
    })

    delete user.password

    return response.json(user)
  }
}
