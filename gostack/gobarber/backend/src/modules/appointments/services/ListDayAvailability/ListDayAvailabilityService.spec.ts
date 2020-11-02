import ListDayAvailabilityService from './ListDayAvailabilityService'
import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository'

let fakeAppointmentsRepository:FakeAppointmentsRepository
let listDayAvailabilityService: ListDayAvailabilityService

describe('ListDayAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository()
    listDayAvailabilityService = new ListDayAvailabilityService(fakeAppointmentsRepository)
  })

  it('should be able to list the day availability from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 21, 8, 0, 0)
    })

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 21, 10, 0, 0)
    })

    const availability = await listDayAvailabilityService.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
      day: 21
    })

    expect(availability).toEqual(expect.arrayContaining([
      { hour: 8, available: false },
      { hour: 9, available: true },
      { hour: 10, available: false },
      { hour: 11, available: true }
    ]))
  })
})
