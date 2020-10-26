import { Router } from 'express';

import sessionStarted from '@modules/users/infra/http/middlewares/sessionStarted';
import ProvidersController from '../controllers/ProvidersController';

const providersController = new ProvidersController();

const router = Router();

router.use(sessionStarted);

router.get('/', providersController.index);

export default router;
