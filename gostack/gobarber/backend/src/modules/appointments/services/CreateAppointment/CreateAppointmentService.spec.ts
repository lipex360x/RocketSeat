// Import App Error
import AppError from '@shared/errors/AppError'

// Import Fakes
import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository'

// Import Services
import CreateAppointmentService from './CreateAppointmentService'

// let fakes: Fakes
let fakeAppointmentsRepository: FakeAppointmentsRepository

// let services: Services
let createAppointmentService: CreateAppointmentService

describe('CreateAppointment', () => {
  beforeEach(() => {
    // Instance Fakes
    fakeAppointmentsRepository = new FakeAppointmentsRepository()

    // Instance Services
    createAppointmentService = new CreateAppointmentService(
      fakeAppointmentsRepository
    )
  })

  // its ...
  it('should be able to create an appointment', async () => {
    // Service Execute...
    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id: 'provider_id'
    })

    // Expect Results
    expect(appointment).toHaveProperty('id')
    expect(appointment.provider_id).toBe('provider_id')
  })

  it('should not be able to two appointments in same date and hour', async () => {
    const appointmentDate = new Date(2020, 4, 10, 11)

    // Service Execute...
    await createAppointmentService.execute({
      date: appointmentDate,
      provider_id: 'provider_id'
    })

    // Expect Results
    await expect(
      createAppointmentService.execute({
        date: appointmentDate,
        provider_id: 'provider_id'
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
