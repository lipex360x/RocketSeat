import { Router } from 'express'
import CreateSessionService from '../service/CreateSession/CreateSessionService'

const router = Router()

router.post('/', async (request, response) => {
  const createSession = new CreateSessionService()

  const { email, password } = request.body
  try {
    const { user, token } = await createSession.execute({ email, password })

    delete user.password

    return response.json({ user, token })
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
})

export default router
