import 'reflect-metadata'
import { injectable, inject } from 'tsyringe'

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

    console.log(getAppointments)

    return [{ day: 1, available: true }]
  }
}
