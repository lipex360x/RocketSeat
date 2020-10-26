import Appointment from '../../infra/typeorm/entities/Appointment';

export interface ICreate {
  provider_id: string;
  user_id: string;
  date: Date;
}

export interface IFindByDate {
  date: Date;
}

export interface IFindAllDaysInMonth {
  provider_id: string;
  month: number;
  year: number;
}

export interface IFindAllHoursInDay {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}

export default interface IAppointmentsRepository {
  create(data: ICreate): Promise<Appointment>;
  findByDate(data: IFindByDate): Promise<Appointment | undefined>;
  findAllDaysInMonth(data: IFindAllDaysInMonth): Promise<Appointment[]>;
  findAllHoursInDay(data: IFindAllHoursInDay): Promise<Appointment[]>;
}
