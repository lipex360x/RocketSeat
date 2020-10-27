import { Router } from 'express'

const router = Router()

router.post('/', async (request, response) => {
  try {
    return response.send('Hello User')
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
})

export default router
