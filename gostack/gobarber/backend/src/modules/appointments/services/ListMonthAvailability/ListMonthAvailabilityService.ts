import 'reflect-metadata'
import { injectable, inject } from 'tsyringe'
import { getDaysInMonth } from 'date-fns'

import IAppointmentsRepository from '@modules/appointments/repositories/interfaces/IAppointmentsRepository'

interface Request {
  provider_id: string
  month: number
  year: number
}

type Response = Array<{
  day: number
  available: boolean
}>;

@injectable()
export default class ListMonthAvailabilityService {
  constructor (
    @inject('')
    private repository:IAppointmentsRepository
  ) {}

  async execute ({ provider_id, year, month }:Request): Promise<Response> {
    const getAppointments = await this.repository.findProvidersInMonth({ provider_id, year, month })

    const numberOfDays = getDaysInMonth(new Date(year, month - 1))

    const eachDayArray = Array.from(
      { length: numberOfDays },
      (_, index) => index + 1
    )

    console.log(eachDayArray)

    return [{ day: 1, available: true }]
  }
}
