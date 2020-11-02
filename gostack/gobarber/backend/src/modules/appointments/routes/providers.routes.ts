import { Router } from 'express'

import sessionStarted from '@shared/middlewares/sessions/sessionStarted'
import ListProvidersController from '../controllers/ListProvidersController'
import ListDayAvailabilityController from '../controllers/ListDayAvailabilityController'
import ListMonthAvailabilityController from '../controllers/ListMonthAvailabilityController'

const listProvidersController = new ListProvidersController()
const listDayAvailabilityController = new ListDayAvailabilityController()
const listMonthAvailabilityController = new ListMonthAvailabilityController()

const router = Router()

router.use(sessionStarted)
router.get('/', listProvidersController.index)
router.get('/:provider_id/month-availability', listMonthAvailabilityController.index)
router.get('/:provider_id/day-availability', listDayAvailabilityController.index)

export default router
