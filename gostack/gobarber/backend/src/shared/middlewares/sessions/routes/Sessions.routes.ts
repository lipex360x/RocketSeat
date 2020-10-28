import UsersRepository from '@modules/users/repositories/implementations/UsersRepository'
import { Router } from 'express'
import CreateSessionService from '../service/CreateSession/CreateSessionService'

const router = Router()

router.post('/', async (request, response) => {
  const repository = new UsersRepository()

  const createSession = new CreateSessionService(repository)

  const { email, password } = request.body

  const { user, token } = await createSession.execute({ email, password })

  delete user.password

  return response.json({ user, token })
})

export default router
