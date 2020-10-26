import IHashProvider, {
  ICompareHashProps,
  IGenerateHashProps,
} from '../models/IHashProvider';

export default class FakeHashProvider implements IHashProvider {
  public async generateHash({ password }: IGenerateHashProps): Promise<string> {
    return password;
  }

  public async compareHash({
    password,
    hashedpassword,
  }: ICompareHashProps): Promise<boolean> {
    return password === hashedpassword;
  }
}
