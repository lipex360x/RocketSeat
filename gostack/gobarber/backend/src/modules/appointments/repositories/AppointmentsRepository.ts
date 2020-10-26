import { isEqual } from 'date-fns'
import Appointment from '../entities/Appointment'

interface CreateProps {
  provider: string
  date: Date
}

interface FindByDateProps {
  date: Date
}

export default class AppointmentsRepository {
  private appointments: Appointment[]

  constructor () {
    this.appointments = []
  }

  public findByDate ({ date }:FindByDateProps): Appointment | null {
    const findAppointment = this.appointments.find(appointment => isEqual(date, appointment.date))

    return findAppointment
  }

  public findAll (): Appointment[] {
    return this.appointments
  }

  public create ({ provider, date }:CreateProps): Appointment {
    const appointment = new Appointment({ date, provider })

    this.appointments.push(appointment)

    return appointment
  }
}
