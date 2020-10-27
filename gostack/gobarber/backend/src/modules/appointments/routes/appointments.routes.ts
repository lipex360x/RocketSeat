import { Router } from 'express'
import { parseISO } from 'date-fns'
import { getCustomRepository } from 'typeorm'
import AppointmentsRepository from '../repositories/implementations/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointment/CreateAppointmentService'

const router = Router()

router.get('/', async (request, response) => {
  const repository = getCustomRepository(AppointmentsRepository)

  const appointments = await repository.find()

  return response.json(appointments)
})

router.post('/', async (request, response) => {
  const { provider_id, date } = request.body

  const parsedDate = parseISO(date)

  try {
    const createAppointment = new CreateAppointmentService()

    const appointment = await createAppointment.execute({ date: parsedDate, provider_id })
    return response.json(appointment)
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
})

export default router
