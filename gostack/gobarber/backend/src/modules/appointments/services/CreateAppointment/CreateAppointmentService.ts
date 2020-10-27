import { startOfHour } from 'date-fns'
import Appointment from '../../entities/Appointment'
import AppointmentsRepository from '../../repositories/implementations/AppointmentsRepository'

interface Request {
  provider: string
  date: Date
}

export default class CreateAppointmentService {
  private appointmentRepository: AppointmentsRepository

  constructor (appointmentRepository: AppointmentsRepository) {
    this.appointmentRepository = appointmentRepository
  }

  async execute ({ provider, date }:Request): Promise<Appointment> {
    const appointmentDate = startOfHour(date)

    const findAppointment = await this.appointmentRepository.findByDate({ date })

    if (findAppointment) {
      throw Error('This appointment is already booked')
    }

    const appointment = await this.appointmentRepository.create({ provider, date: appointmentDate })

    return appointment
  }
}
