import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload.config';

import UsersController from '@modules/users/infra/http/controllers/UsersController';
import AvatarController from '@modules/users/infra/http/controllers/AvatarController';

import sessionStarted from '@modules/users/infra/http/middlewares/sessionStarted';

const router = Router();
const upload = multer(uploadConfig);
const usersControler = new UsersController();
const avatarControler = new AvatarController();

router.post('/', usersControler.create);

router.patch(
  '/avatar',
  sessionStarted,
  upload.single('avatar'),
  avatarControler.update,
);

export default router;
