import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';
import sessionStarted from '../middlewares/sessionStarted';

const router = Router();
const profileController = new ProfileController();

router.use(sessionStarted);

router.get('/', profileController.show);
router.put('/', profileController.update);

export default router;
