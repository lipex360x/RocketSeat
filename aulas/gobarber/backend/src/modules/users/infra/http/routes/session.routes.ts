import { Router } from 'express';

import SessionsControler from '@modules/users/infra/http/controllers/SessionsController';

const router = Router();
const sessionController = new SessionsControler();

router.post('/', sessionController.create);

export default router;
