import { startOfHour } from 'date-fns'
import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import Appointment from '@modules/appointments/entities/Appointment'
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository'

interface Request {
  provider_id: string
  date: Date
}

@injectable()
export default class CreateAppointmentService {
  constructor (
    @inject('AppointmentsRepository')
    private repository: IAppointmentsRepository
  ) {}

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
