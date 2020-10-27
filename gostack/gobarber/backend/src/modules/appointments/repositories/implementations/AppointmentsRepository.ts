import { isEqual } from 'date-fns'
import Appointment from '../../entities/Appointment'
import IRepository, { CreateProps, FindByDateProps } from '../IRepository'

export default class AppointmentsRepository implements IRepository {
  private appointments: Appointment[]

  constructor () {
    this.appointments = []
  }

  async findByDate ({ date }:FindByDateProps): Promise<Appointment> {
    const findAppointment = this.appointments.find(appointment => isEqual(date, appointment.date))

    return findAppointment
  }

  async findAll (): Promise<Appointment[]> {
    return this.appointments
  }

  async create ({ provider, date }:CreateProps): Promise<Appointment> {
    const appointment = new Appointment({ date, provider })

    this.appointments.push(appointment)

    return appointment
  }
}
