import { Router } from 'express'
import { startOfHour, parseISO } from 'date-fns'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

const router = Router()
const appointmentsRepository = new AppointmentsRepository()

router.post('/', (request, response) => {
  const { provider, date } = request.body

  const parsedDate = startOfHour(parseISO(date))

  const findAppointment = appointmentsRepository.findByDate({ date: parsedDate })

  if (findAppointment) return response.status(400).json({ message: 'This appointment is already booked' })

  const appointment = appointmentsRepository.create({ provider, date: parsedDate })

  return response.json(appointment)
})

export default router
