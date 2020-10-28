import { getRepository, Repository } from 'typeorm'
import Appointment from '@modules/appointments/entities/Appointment'

import InterfaceRepository, { CreateProps, FindByDateProps } from '../IAppointmentsRepository'

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

  async create ({ provider_id, date }:CreateProps): Promise<Appointment> {
    const appointment = this.ormRepository.create({ provider_id, date })

    await this.ormRepository.save(appointment)

    return appointment
  }
}
