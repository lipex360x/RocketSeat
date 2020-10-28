import { startOfHour } from 'date-fns'

import AppError from '@shared/errors/AppError'
import Appointment from '../../entities/Appointment'
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository'

interface Request {
  provider_id: string
  date: Date
}

export default class CreateAppointmentService {
  constructor (private repository: IAppointmentsRepository) { }

  async execute ({ provider_id, date }:Request): Promise<Appointment> {
    const appointmentDate = startOfHour(date)

    const findAppointment = await this.repository.findByDate({ date: appointmentDate })

    if (findAppointment) {
      throw new AppError('This appointment is already booked')
    }

    const appointment = await this.repository.create({ provider_id, date: appointmentDate })

    return appointment
  }
}
