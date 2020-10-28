import { Router } from 'express'

import CreateSessionController from '../service/CreateSession/CreateSessionController'

const createSessionController = new CreateSessionController()

const router = Router()

router.post('/', createSessionController.create)

export default router
