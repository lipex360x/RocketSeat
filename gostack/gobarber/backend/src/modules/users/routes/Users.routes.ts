import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '@config/upload.config'
import sessionStarted from '@shared/middlewares/sessions/sessionStarted'

import UsersController from '../services/CreateUser/CreateUserController'
import UpdateAvatarController from '../services/UpdateAvatar/UpdateAvatarController'

const usersController = new UsersController()
const updateAvatarController = new UpdateAvatarController()

const router = Router()
const upload = multer(uploadConfig)

router.post('/', usersController.create)

router.use(sessionStarted)
router.patch('/avatar', upload.single('avatar'), updateAvatarController.update)

export default router
