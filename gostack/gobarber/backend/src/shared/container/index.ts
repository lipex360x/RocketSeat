import { container } from 'tsyringe'

import '@modules/users/providers'
import './providers/injectProviders'

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository'
import AppointmentsRepository from '@modules/appointments/repositories/implementations/AppointmentsRepository'

import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'
import UsersRepository from '@modules/users/repositories/implementations/UsersRepository'

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)
