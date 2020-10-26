import { getRepository, Repository, Raw } from 'typeorm';

import IAppointmentsRepository, {
  ICreate,
  IFindByDate,
  IFindAllDaysInMonth,
  IFindAllHoursInDay,
} from '@modules/appointments/repositories/models/IAppointmentsRepository';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async create({
    provider_id,
    date,
    user_id,
  }: ICreate): Promise<Appointment> {
    const appointment = this.ormRepository.create({
      provider_id,
      date,
      user_id,
    });
    await this.ormRepository.save(appointment);

    return appointment;
  }

  public async findByDate({
    date,
  }: IFindByDate): Promise<Appointment | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointment;
  }

  public async findAllDaysInMonth({
    provider_id,
    month,
    year,
  }: IFindAllDaysInMonth): Promise<Appointment[]> {
    const parsedMonth = String(month).padStart(2, '0');
    const findAppointment = await this.ormRepository.find({
      where: {
        provider_id,
        date: Raw(
          dateFieldName =>
            `to_char(${dateFieldName}, 'MM-YYYY') = '${parsedMonth}-${year}'`,
        ),
      },
    });

    return findAppointment;
  }

  public async findAllHoursInDay({
    provider_id,
    month,
    year,
    day,
  }: IFindAllHoursInDay): Promise<Appointment[]> {
    const parsedDay = String(day).padStart(2, '0');
    const parsedMonth = String(month).padStart(2, '0');
    const findAppointment = await this.ormRepository.find({
      where: {
        provider_id,
        date: Raw(
          dateFieldName =>
            `to_char(${dateFieldName}, 'DD-MM-YYYY') = '${parsedDay}-${parsedMonth}-${year}'`,
        ),
      },
    });

    return findAppointment;
  }
}

export default AppointmentsRepository;
