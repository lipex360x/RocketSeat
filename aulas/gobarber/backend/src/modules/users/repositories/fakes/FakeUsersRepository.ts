import { uuid } from 'uuidv4';

import User from '../../infra/typeorm/entities/User';

import IUsersRepository, {
  IFindByIdPros,
  IFindByEmailPros,
  ISaveProps,
  ICreateProps,
  IFindAllProvidersProps,
} from '../models/IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById({ id }: IFindByIdPros): Promise<User | undefined> {
    const getUser = this.users.find(user => user.id === id);
    return getUser;
  }

  public async findAllProviders({
    except_user_id,
  }: IFindAllProvidersProps): Promise<User[]> {
    let { users } = this;

    if (except_user_id) {
      users = this.users.filter(user => user.id !== except_user_id);
    }

    return users;
  }

  public async findByEmail({
    email,
  }: IFindByEmailPros): Promise<User | undefined> {
    const getUser = this.users.find(user => user.email === email);

    return getUser;
  }

  public async create({
    email,
    name,
    password,
    sere,
  }: ICreateProps): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid(), name, email, password });

    this.users.push(user);

    return user;
  }

  public async save({ user }: ISaveProps): Promise<User> {
    const getIndex = this.users.findIndex(getUser => getUser.id === user.id);

    this.users[getIndex] = user;

    return user;
  }
}

export default UsersRepository;
