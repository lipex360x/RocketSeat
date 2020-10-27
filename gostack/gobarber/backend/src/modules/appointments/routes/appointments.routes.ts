import { Router } from 'express'
import { parseISO } from 'date-fns'
import AppointmentsRepository from '../repositories/implementations/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointment/CreateAppointmentService'

const router = Router()
const appointmentsRepository = new AppointmentsRepository()

router.get('/', (request, response) => {
  const appointments = appointmentsRepository.findAll()

  return response.json(appointments)
})

router.post('/', async (request, response) => {
  const { provider, date } = request.body

  const parsedDate = parseISO(date)

  try {
    const createAppointment = new CreateAppointmentService(appointmentsRepository)

    const appointment = await createAppointment.execute({ date: parsedDate, provider })
    return response.json(appointment)
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
})

export default router
