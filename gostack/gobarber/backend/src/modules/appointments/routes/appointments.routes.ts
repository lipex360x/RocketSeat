import { Router } from 'express'

import sessionStarted from '@shared/middlewares/sessions/sessionStarted'
import CreateAppointmentsController from '../controllers/CreateAppointmentsController'

const createAppointmentsController = new CreateAppointmentsController()

const router = Router()

router.use(sessionStarted)

router.get('/', async (request, response) => {
  // const appointments = await repository.find()

  // return response.json(appointments)
})

router.post('/', createAppointmentsController.create)

export default router
