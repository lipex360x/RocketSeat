import { startOfHour } from 'date-fns'
import { getCustomRepository } from 'typeorm'

import AppError from '@shared/errors/AppError'
import Appointment from '../../entities/Appointment'
import AppointmentsRepository from '../../repositories/implementations/AppointmentsRepository'

interface Request {
  provider_id: string
  date: Date
}

export default class CreateAppointmentService {
  async execute ({ provider_id, date }:Request): Promise<Appointment> {
    const repository = getCustomRepository(AppointmentsRepository)

    const appointmentDate = startOfHour(date)

    const findAppointment = await repository.findByDate({ date: appointmentDate })

    if (findAppointment) {
      throw new AppError('This appointment is already booked')
    }

    const appointment = repository.create({ provider_id, date: appointmentDate })

    await repository.save(appointment)

    return appointment
  }
}
