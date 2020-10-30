import { Router } from 'express'

import AppointmentsRouter from '@modules/appointments/routes/appointments.routes'
import UsersRouter from '@modules/users/routes/Users.routes'
import PasswordRouter from '@modules/users/routes/Password.routes'
import SessionsRouter from '@shared/middlewares/sessions/routes/Sessions.routes'

const router = Router()

router.use('/appointments', AppointmentsRouter)
router.use('/users', UsersRouter)
router.use('/password', PasswordRouter)
router.use('/sessions', SessionsRouter)

export default router
