import { Router } from 'express'
import { parseISO } from 'date-fns'
import { container } from 'tsyringe'

import sessionStarted from '@shared/middlewares/sessions/sessionStarted'
import CreateAppointmentService from '../services/CreateAppointment/CreateAppointmentService'

const router = Router()

router.use(sessionStarted)

router.get('/', async (request, response) => {
  // const appointments = await repository.find()

  // return response.json(appointments)
})

router.post('/', async (request, response) => {
  const { provider_id, date } = request.body

  const createAppointment = container.resolve(CreateAppointmentService)

  const parsedDate = parseISO(date)

  const appointment = await createAppointment.execute({ date: parsedDate, provider_id })

  return response.json(appointment)
})

export default router
