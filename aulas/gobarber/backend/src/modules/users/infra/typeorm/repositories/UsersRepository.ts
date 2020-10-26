import { getRepository, Repository, Not } from 'typeorm';

import IUsersRepository, {
  IFindByIdPros,
  IFindByEmailPros,
  ISaveProps,
  ICreateProps,
  IFindAllProvidersProps,
} from '@modules/users/repositories/models/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findAllProviders({
    except_user_id,
  }: IFindAllProvidersProps): Promise<User[]> {
    let users: User[];
    if (except_user_id) {
      users = await this.ormRepository.find({
        where: {
          id: Not(except_user_id),
        },
      });
    } else {
      users = await this.ormRepository.find();
    }

    return users;
  }

  public async findById({ id }: IFindByIdPros): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);
    return user;
  }

  public async findByEmail({
    email,
  }: IFindByEmailPros): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } });
    return user;
  }

  public async create({ name, email, password }: ICreateProps): Promise<User> {
    const user = this.ormRepository.create({ name, email, password });
    await this.ormRepository.save(user);

    return user;
  }

  public async save({ user }: ISaveProps): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
