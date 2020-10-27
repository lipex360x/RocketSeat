import { Router } from 'express'

import AppointmentsRouter from '@modules/appointments/routes/appointments.routes'
import UsersRouter from '@modules/users/routes/Users.routes'

const router = Router()

router.use('/appointments', AppointmentsRouter)
router.use('/users', UsersRouter)

export default router
