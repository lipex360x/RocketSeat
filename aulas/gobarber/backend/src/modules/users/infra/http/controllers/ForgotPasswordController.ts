import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPwdService from '@modules/users/services/SendForgotPwdService';

class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;
    const sendForgotPwdService = container.resolve(SendForgotPwdService);

    await sendForgotPwdService.execute({ email });

    return response.status(204).send();
  }
}

export default ForgotPasswordController;
