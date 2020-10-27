import { Router } from 'express'
import { parseISO } from 'date-fns'
import { getCustomRepository } from 'typeorm'

import sessionStarted from '@shared/middlewares/sessions/sessionStarted'
import AppointmentsRepository from '../repositories/implementations/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointment/CreateAppointmentService'

const router = Router()

router.use(sessionStarted)

router.get('/', async (request, response) => {
  const repository = getCustomRepository(AppointmentsRepository)

  const appointments = await repository.find()

  return response.json(appointments)
})

router.post('/', async (request, response) => {
  const { provider_id, date } = request.body

  const createAppointment = new CreateAppointmentService()

  const parsedDate = parseISO(date)

  try {
    const appointment = await createAppointment.execute({ date: parsedDate, provider_id })
    return response.json(appointment)
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
})

export default router
