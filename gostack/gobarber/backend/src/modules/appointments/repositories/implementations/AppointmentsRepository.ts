import { getRepository, Repository, Raw } from 'typeorm'
import Appointment from '@modules/appointments/entities/Appointment'

import InterfaceRepository, { CreateProps, FindByDateProps, FindProvidersInMonthProps } from '../interfaces/IAppointmentsRepository'

export default class AppointmentsRepository implements InterfaceRepository {
  private ormRepository: Repository<Appointment>

  constructor () {
    this.ormRepository = getRepository(Appointment)
  }

  async findByDate ({ date }:FindByDateProps): Promise<Appointment> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date }
    })

    return findAppointment
  }

  async findProvidersInMonth ({ provider_id, year, month }:FindProvidersInMonthProps): Promise<Appointment[]> {
    const parsedMonth = String(month).padStart(2, '0')

    const filterAppointments = await this.ormRepository.find({
      where: {
        provider_id,
        date: Raw(dateFieldName =>
          `to_char(${dateFieldName}), 'MM-YYYY') = '${parsedMonth}=${year}'`
        )
      }
    })

    return filterAppointments
  }

  async create ({ provider_id, date }:CreateProps): Promise<Appointment> {
    const appointment = this.ormRepository.create({ provider_id, date })

    await this.ormRepository.save(appointment)

    return appointment
  }
}
