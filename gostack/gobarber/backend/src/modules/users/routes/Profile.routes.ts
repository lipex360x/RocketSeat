import { Router } from 'express'

import sessionStarted from '@shared/middlewares/sessions/sessionStarted'

import UpdateProfileController from '../controller/UpdateProfileController'
import ShowProfileController from '../controller/ShowProfileController'

const updateProfileController = new UpdateProfileController()
const showProfileController = new ShowProfileController()

const router = Router()

router.use(sessionStarted)
router.get('/', showProfileController.show)
router.put('/', updateProfileController.update)

export default router
