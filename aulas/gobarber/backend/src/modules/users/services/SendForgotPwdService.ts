import { injectable, inject } from 'tsyringe';
import path from 'path';

// import User from '@modules/users/infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';

import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUsersRepository from '../repositories/models/IUsersRepository';
import IUserTokenRepository from '../repositories/models/IUserTokenRepository';

interface IRequest {
  email: string;
}

@injectable()
export default class SendForgotPwdService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('UserTokenRepository')
    private userTokenRepository: IUserTokenRepository,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const getUser = await this.usersRepository.findByEmail({ email });

    if (!getUser) {
      throw new AppError('Usuário inexistente na base');
    }

    const { token } = await this.userTokenRepository.generate({
      user_id: getUser.id,
    });

    const forgotPwdTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'forgot_password.hbs',
    );

    await this.mailProvider.sendMail({
      to: {
        name: getUser.name,
        email: getUser.email,
      },
      subject: 'Recuperação de Senha',
      templateData: {
        file: forgotPwdTemplate,
        variables: {
          name: getUser.name,
          token,
          link: `http://localhost:3000/reset_password?token=${token}`,
        },
      },
    });
  }
}
