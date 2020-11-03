import 'reflect-metadata'
import { injectable, inject } from 'tsyringe'

import IAppointmentsRepository from '@modules/appointments/repositories/interfaces/IAppointmentsRepository'
import ICacheProvider from '@shared/container/providers/CacheProvider/interfaces/ICacheProvider'
import Appointment from '@modules/appointments/entities/Appointment'

interface Request {
  provider_id: string
  month: number
  year: number
  day: number
}

@injectable()
export default class ListAppointmentsService {
  constructor (
    @inject('AppointmentsRepository')
    private repository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cache: ICacheProvider
  ) {}

  async execute ({ provider_id, year, month, day }:Request): Promise<Appointment[]> {
    const appointments = await this.repository.findAllInDay({ provider_id, year, month, day })

    return appointments
  }
}
