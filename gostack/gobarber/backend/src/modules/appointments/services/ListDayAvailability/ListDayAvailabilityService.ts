import 'reflect-metadata'
import { injectable, inject } from 'tsyringe'
import { getHours } from 'date-fns'

import IAppointmentsRepository from '@modules/appointments/repositories/interfaces/IAppointmentsRepository'

interface Request {
  provider_id: string
  month: number
  year: number,
  day: number
}

type Response = Array<{
  hour: number
  available: boolean
}>;

@injectable()
export default class ListDayAvailabilityService {
  constructor (
    @inject('AppointmentsRepository')
    private repository: IAppointmentsRepository
  ) {}

  async execute ({ provider_id, year, month, day }:Request): Promise<Response> {
    const appointments = await this.repository.findAllInDay({ provider_id, year, month, day })

    const hourStart = 8

    const eachHourArray = Array.from({ length: 10 }, (_, index) => index + hourStart)

    const availability = eachHourArray.map(hour => {
      const hasAppointment = appointments.find(appointment => getHours(appointment.date) === hour)

      return {
        hour,
        available: !hasAppointment
      }
    })

    return availability
  }
}
