import { Router } from 'express';

import OngController from './app/controllers/OngController';
import CasoController from './app/controllers/CasoController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);
routes.get('/ong', OngController.show);
routes.put('/ongs', OngController.update);
routes.delete('/ong', OngController.destroy);

routes.post('/casos', CasoController.store);
routes.get('/casos', CasoController.index);
routes.get('/caso/:id', CasoController.show);
routes.put('/caso/:id', CasoController.update);
routes.delete('/caso/:id', CasoController.destroy);

routes.post('/session', SessionController.store);

export default routes;
