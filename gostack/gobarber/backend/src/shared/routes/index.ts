import { Router } from 'express'

import AppointmentsRouter from '@modules/appointments/routes/appointments.routes'

const router = Router()

router.use('/appointments', AppointmentsRouter)

export default router
