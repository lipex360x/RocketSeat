import { Router } from 'express'

import sessionStarted from '@shared/middlewares/sessions/sessionStarted'
import CreateAppointmentsController from '../controllers/CreateAppointmentsController'
import ListAppointmentsController from '../controllers/ListAppointmentsController'

const createAppointmentsController = new CreateAppointmentsController()
const listAppointmentsController = new ListAppointmentsController()

const router = Router()

router.use(sessionStarted)

router.get('/', async (request, response) => {
  // const appointments = await repository.find()

  // return response.json(appointments)
})

router.post('/', createAppointmentsController.create)
router.get('/me', listAppointmentsController.index)

export default router
