import { Router } from 'express';

import uploadRouter from './upload.routes';

const routes = Router();

routes.use('/upload', uploadRouter);

export default routes;
