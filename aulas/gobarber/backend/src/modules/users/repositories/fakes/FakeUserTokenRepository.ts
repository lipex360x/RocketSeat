import { uuid } from 'uuidv4';

import UserToken from '../../infra/typeorm/entities/UserToken';

import IUserTokenRepository, {
  IGenerateProps,
  IFindByTokenProps,
} from '../models/IUserTokenRepository';

export default class FakeUserTokenRepository implements IUserTokenRepository {
  private localDB: UserToken[] = [];

  public async generate({ user_id }: IGenerateProps): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.localDB.push(userToken);

    return userToken;
  }

  public async findByToken({
    token,
  }: IFindByTokenProps): Promise<UserToken | undefined> {
    const userToken = this.localDB.find(findToken => findToken.token === token);

    return userToken;
  }
}
