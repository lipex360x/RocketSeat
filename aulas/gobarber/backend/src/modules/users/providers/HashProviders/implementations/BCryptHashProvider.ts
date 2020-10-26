import { hash, compare } from 'bcryptjs';

import IHashProvider, {
  ICompareHashProps,
  IGenerateHashProps,
} from '../models/IHashProvider';

export default class BCryptHashProvider implements IHashProvider {
  public async generateHash({ password }: IGenerateHashProps): Promise<string> {
    return hash(password, 8);
  }

  public async compareHash({
    password,
    hashedpassword,
  }: ICompareHashProps): Promise<boolean> {
    return compare(password, hashedpassword);
  }
}
