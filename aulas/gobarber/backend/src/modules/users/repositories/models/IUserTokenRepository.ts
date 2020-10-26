import UserToken from '../../infra/typeorm/entities/UserToken';

export interface IGenerateProps {
  user_id: string;
}
export interface IFindByTokenProps {
  token: string;
}

export default interface IUserTokenRepository {
  generate(data: IGenerateProps): Promise<UserToken>;
  findByToken(data: IFindByTokenProps): Promise<UserToken | undefined>;
}
