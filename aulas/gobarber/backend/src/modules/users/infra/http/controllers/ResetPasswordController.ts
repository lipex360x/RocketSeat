import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPwdService from '@modules/users/services/ResetPwdService';

class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { token, password } = request.body;
    const resetPwdService = container.resolve(ResetPwdService);
    await resetPwdService.execute({ token, password });

    return response.status(204).send();
  }
}

export default ResetPasswordController;
