import { Router } from 'express'
import multer from 'multer'

import storageConfig from '@shared/container/providers/StorageFiles/config/storage.config'
import sessionStarted from '@shared/middlewares/sessions/sessionStarted'

import UsersController from '../controller/CreateUserController'
import UpdateAvatarController from '../controller/UpdateAvatarController'

const usersController = new UsersController()
const updateAvatarController = new UpdateAvatarController()

const router = Router()
const upload = multer(storageConfig)

router.post('/', usersController.create)

router.use(sessionStarted)
router.patch('/avatar', upload.single('avatar'), updateAvatarController.update)

export default router
