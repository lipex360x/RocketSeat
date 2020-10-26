import { Router } from 'express'
import { startOfHour, parseISO, isEqual } from 'date-fns'
import Appointment from '../entities/Appointment'

const router = Router()

interface AppointmentProps {
  id: string
  provider: string
  date: Date
}

const appointments: AppointmentProps[] = []

router.post('/', (request, response) => {
  const { provider, date } = request.body

  const parsedDate = startOfHour(parseISO(date))
  const findAppointment = appointments.find(appointment => isEqual(parsedDate, appointment.date))
  const appointment = new Appointment({ date, provider })

  if (findAppointment) return response.status(400).json({ message: 'This appointment is already booked' })

  appointments.push(appointment)

  return response.json(appointment)
})

export default router
