import { EntityRepository, Repository } from 'typeorm'
import Appointment from '../../entities/Appointment'

import { FindByDateProps } from '../IRepository'

@EntityRepository(Appointment)
export default class AppointmentsRepository extends Repository<Appointment> {
  async findByDate ({ date }:FindByDateProps): Promise<Appointment> {
    const findAppointment = await this.findOne({
      where: { date }
    })

    return findAppointment
  }
}
