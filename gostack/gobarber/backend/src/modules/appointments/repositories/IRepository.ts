import Appointment from '../entities/Appointment'

export interface CreateProps {
  provider: string
  date: Date
}

export interface FindByDateProps {
  date: Date
}

export default interface IRepository {
  create(data: CreateProps): Promise<Appointment>
  findByDate(data:FindByDateProps): Promise<Appointment>
  findAll(): Promise<Appointment[]>
}
