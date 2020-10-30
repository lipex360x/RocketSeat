import { container } from 'tsyringe'
import { Request, Response } from 'express'

import ShowProfileService from '../services/ShowProfile/ShowProfileService'

export default class ShowProfileController {
  async show (request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id

    const profile = container.resolve(ShowProfileService)

    const getUser = await profile.execute({ user_id })

    delete getUser.password

    return response.json(getUser)
  }
}
