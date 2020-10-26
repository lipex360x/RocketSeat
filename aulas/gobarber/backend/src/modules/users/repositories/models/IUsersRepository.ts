import User from '../../infra/typeorm/entities/User';

export interface ICreateProps {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IFindByIdPros {
  id: string;
}

export interface IFindByEmailPros {
  email: string;
}

export interface ISaveProps {
  user: User;
}

export interface IFindAllProvidersProps {
  except_user_id?: string;
}

export default interface IUsersRepository {
  create(data: ICreateProps): Promise<User>;
  findById(data: IFindByIdPros): Promise<User | undefined>;
  findByEmail(data: IFindByEmailPros): Promise<User | undefined>;
  findAllProviders(data: IFindAllProvidersProps): Promise<User[]>;
  save(data: ISaveProps): Promise<User>;
}
