import { Request, Response } from 'express'
import { parseISO } from 'date-fns'
import { container } from 'tsyringe'

import CreateAppointmentService from '../services/CreateAppointment/CreateAppointmentService'

export default class AppointmentsController {
  public async create (request:Request, response: Response): Promise<Response> {
    const { provider_id, date } = request.body

    const createAppointment = container.resolve(CreateAppointmentService)

    const parsedDate = parseISO(date)

    const appointment = await createAppointment.execute({ date: parsedDate, provider_id })

    return response.json(appointment)
  }
}
