import { Router } from 'express'

import sessionStarted from '@shared/middlewares/sessions/sessionStarted'
import ListProvidersController from '../controllers/ListProvidersController'

const listProvidersController = new ListProvidersController()

const router = Router()

router.use(sessionStarted)
router.get('/', listProvidersController.index)

export default router
