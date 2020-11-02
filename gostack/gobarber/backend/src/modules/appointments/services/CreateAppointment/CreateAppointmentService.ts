import { startOfHour, isBefore, getHours } from 'date-fns'
import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import Appointment from '@modules/appointments/entities/Appointment'
import IAppointmentsRepository from '@modules/appointments/repositories/interfaces/IAppointmentsRepository'

interface Request {
  user_id: string
  provider_id: string
  date: Date
}

@injectable()
export default class CreateAppointmentService {
  constructor (
    @inject('AppointmentsRepository')
    private repository: IAppointmentsRepository
  ) {}

  async execute ({ user_id, provider_id, date }:Request): Promise<Appointment> {
    const appointmentDate = startOfHour(date)

    if (isBefore(appointmentDate, Date.now())) {
      throw new AppError("You can't create an appointment on past date")
    }

    const findAppointment = await this.repository.findByDate({ date: appointmentDate })

    if (findAppointment) {
      throw new AppError('This appointment is already booked')
    }

    if (user_id === provider_id) {
      throw new AppError("You can't create an appointment with himself")
    }

    if (getHours(appointmentDate) < 8 || getHours(appointmentDate) > 17) {
      throw new AppError('You can only create an appointment between 8am and 17pm')
    }

    const appointment = await this.repository.create({ user_id, provider_id, date: appointmentDate })

    return appointment
  }
}
