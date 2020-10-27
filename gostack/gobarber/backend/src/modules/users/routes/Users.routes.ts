import { Router } from 'express'
import CreateUserService from '../services/CreateUser/CreateUserService'

const router = Router()

router.post('/', async (request, response) => {
  const { name, email, password } = request.body
  try {
    const createUser = new CreateUserService()

    const user = await createUser.execute({ name, email, password })

    return response.json(user)
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
})

export default router
