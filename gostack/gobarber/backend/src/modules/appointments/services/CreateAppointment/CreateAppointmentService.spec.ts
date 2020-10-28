// App Error
import AppError from '@shared/errors/AppError'

// Fake Repository
import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository'

// Service
import CreateAppointmentService from './CreateAppointmentService'

// let fakeRepository
let fakeAppointmentsRepository: FakeAppointmentsRepository

// let service
let createAppointmentService: CreateAppointmentService

describe('CreateAppointment', () => {
  beforeEach(() => {
    // Fake Repository
    fakeAppointmentsRepository = new FakeAppointmentsRepository()

    // Service
    createAppointmentService = new CreateAppointmentService(
      fakeAppointmentsRepository
    )
  })

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
    expect(
      createAppointmentService.execute({
        date: appointmentDate,
        provider_id: 'provider_id'
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
