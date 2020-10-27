import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '@config/upload.config'

import sessionStarted from '@shared/middlewares/sessions/sessionStarted'
import CreateUserService from '../services/CreateUser/CreateUserService'
import UpdateAvatarService from '../services/UpdateAvatar/UpdateAvatarService'

const router = Router()
const upload = multer(uploadConfig)

router.post('/', async (request, response) => {
  const { name, email, password } = request.body

  const createUser = new CreateUserService()

  const user = await createUser.execute({ name, email, password })

  delete user.password

  return response.json(user)
})

router.use(sessionStarted)
router.patch('/avatar', upload.single('avatar'), async (request, response) => {
  const avatarFile = request.file.filename
  const { id } = request.user

  const updateAvatar = new UpdateAvatarService()

  const user = await updateAvatar.execute({
    avatarFilename: avatarFile,
    user_id: id
  })

  delete user.password

  response.json(user)
})

export default router
