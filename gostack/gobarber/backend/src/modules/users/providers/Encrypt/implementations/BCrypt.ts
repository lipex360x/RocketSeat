import { hash, compare } from 'bcryptjs'

import IEncrypt, { CompareProps, GenerateProps } from '../interfaces/IEncrypt'

export default class BCrypt implements IEncrypt {
  async generate ({ password }:GenerateProps): Promise<string> {
    return hash(password, 8)
  }

  async compare ({ password, hashed }:CompareProps): Promise<boolean> {
    return compare(password, hashed)
  }
}
