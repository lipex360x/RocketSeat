import { Router } from 'express'

import sessionStarted from '@shared/middlewares/sessions/sessionStarted'
import AppointmentsController from '../controllers/AppointmentsController'

const appointmentsController = new AppointmentsController()

const router = Router()

router.use(sessionStarted)

router.get('/', async (request, response) => {
  // const appointments = await repository.find()

  // return response.json(appointments)
})

router.post('/', appointmentsController.create)

export default router
