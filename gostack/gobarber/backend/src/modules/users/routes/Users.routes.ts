import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '@config/upload.config'
import sessionStarted from '@shared/middlewares/sessions/sessionStarted'

import UsersController from '../controllers/UsersController'
import UserAvartarController from '../controllers/UserAvatarController'

const usersController = new UsersController()
const userAvatarController = new UserAvartarController()

const router = Router()
const upload = multer(uploadConfig)

router.post('/', usersController.create)

router.use(sessionStarted)
router.patch('/avatar', upload.single('avatar'), userAvatarController.update)

export default router
