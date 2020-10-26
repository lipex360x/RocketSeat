import { Router } from 'express';

import sessionStarted from '@modules/users/infra/http/middlewares/sessionStarted';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsController = new AppointmentsController();

const router = Router();

router.use(sessionStarted);

router.post('/', appointmentsController.create);

export default router;
