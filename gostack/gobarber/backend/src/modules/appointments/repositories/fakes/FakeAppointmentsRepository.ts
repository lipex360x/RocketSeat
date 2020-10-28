import { v4 as uuid } from 'uuid'
import { isEqual } from 'date-fns'

import Appointment from '@modules/appointments/entities/Appointment'

import InterfaceRepository, { CreateProps, FindByDateProps } from '../IAppointmentsRepository'

export default class AppointmentsRepository implements InterfaceRepository {
  private appointments: Appointment[] = [];

  async create ({ provider_id, date }:CreateProps): Promise<Appointment> {
    const appointment = new Appointment()

    Object.assign(appointment, {
      id: uuid(),
      date,
      provider_id
    })

    this.appointments.push(appointment)

    return appointment
  }

  async findByDate ({ date }:FindByDateProps): Promise<Appointment> {
    const findAppointment = this.appointments.find(a => isEqual(a.date, date))

    return findAppointment
  }
}
