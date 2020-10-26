import * as L from 'tracer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderService from '../../../services/ListProviderService';

class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const logging = L.console();
    logging.log('teste');

    const user_id = request.user.id;
    const listProviderService = container.resolve(ListProviderService);
    const providers = await listProviderService.execute({ user_id });

    return response.json(providers);
  }
}

export default ProvidersController;
