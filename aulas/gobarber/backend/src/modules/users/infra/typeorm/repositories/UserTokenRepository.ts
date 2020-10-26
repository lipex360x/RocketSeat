import { getRepository, Repository } from 'typeorm';

import IUserTokenRepository, {
  IFindByTokenProps,
  IGenerateProps,
} from '@modules/users/repositories/models/IUserTokenRepository';

import UserToken from '../entities/UserToken';

export default class UserTokenRepository implements IUserTokenRepository {
  private ormRepository: Repository<UserToken>;

  constructor() {
    this.ormRepository = getRepository(UserToken);
  }

  public async findByToken({
    token,
  }: IFindByTokenProps): Promise<UserToken | undefined> {
    const getUserToken = await this.ormRepository.findOne({ where: { token } });

    return getUserToken;
  }

  public async generate({ user_id }: IGenerateProps): Promise<UserToken> {
    const userToken = this.ormRepository.create({ user_id });
    await this.ormRepository.save(userToken);

    return userToken;
  }
}
