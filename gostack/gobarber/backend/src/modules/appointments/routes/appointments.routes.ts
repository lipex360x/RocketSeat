import { Router } from 'express'
import { parseISO } from 'date-fns'

import sessionStarted from '@shared/middlewares/sessions/sessionStarted'
import AppointmentsRepository from '../repositories/implementations/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointment/CreateAppointmentService'

const router = Router()

router.use(sessionStarted)

router.get('/', async (request, response) => {
  // const appointments = await repository.find()

  // return response.json(appointments)
})

router.post('/', async (request, response) => {
  const { provider_id, date } = request.body

  const repository = new AppointmentsRepository()

  const createAppointment = new CreateAppointmentService(repository)

  const parsedDate = parseISO(date)

  const appointment = await createAppointment.execute({ date: parsedDate, provider_id })

  return response.json(appointment)
})

export default router
