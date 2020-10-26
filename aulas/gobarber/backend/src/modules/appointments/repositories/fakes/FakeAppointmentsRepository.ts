import { uuid } from 'uuidv4';
import { isEqual, getMonth, getDate, getYear } from 'date-fns';

import Appointment from '../../infra/typeorm/entities/Appointment';

import IAppointmentsRepository, {
  ICreate,
  IFindByDate,
  IFindAllDaysInMonth,
  IFindAllHoursInDay,
} from '../models/IAppointmentsRepository';

class AppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  public async create({
    provider_id,
    date,
    user_id,
  }: ICreate): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, {
      id: uuid(),
      user_id,
      date,
      provider_id,
    });

    this.appointments.push(appointment);

    return appointment;
  }

  public async findByDate({
    date,
  }: IFindByDate): Promise<Appointment | undefined> {
    const findAppointment = this.appointments.find(a => isEqual(a.date, date));

    return findAppointment;
  }

  public async findAllDaysInMonth({
    provider_id,
    month,
    year,
  }: IFindAllDaysInMonth): Promise<Appointment[]> {
    const findAppointment = this.appointments.filter(
      appointment =>
        appointment.provider_id === provider_id &&
        getMonth(appointment.date) + 1 === month &&
        getYear(appointment.date) === year,
    );

    return findAppointment;
  }

  public async findAllHoursInDay({
    provider_id,
    day,
    month,
    year,
  }: IFindAllHoursInDay): Promise<Appointment[]> {
    const findAppointment = this.appointments.filter(
      appointment =>
        appointment.provider_id === provider_id &&
        getDate(appointment.date) === day &&
        getMonth(appointment.date) + 1 === month &&
        getYear(appointment.date) === year,
    );

    return findAppointment;
  }
}

export default AppointmentsRepository;
