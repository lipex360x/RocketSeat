import Appointment from '../entities/Appointment'

export interface CreateProps {
  provider_id: string
  date: Date
}

export interface FindByDateProps {
  date: Date
}

export default interface IAppointmentsRepository {
  findByDate(data:FindByDateProps): Promise<Appointment>
  create(data: CreateProps): Promise<Appointment>
}
