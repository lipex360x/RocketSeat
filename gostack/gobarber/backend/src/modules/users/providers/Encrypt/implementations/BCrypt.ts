import { hash, compare } from 'bcryptjs'

import IEncrypt, { CompareProps, GenerateProps } from '../interfaces/IEncrypt'

export default class BCrypt implements IEncrypt {
  async generate ({ payload }:GenerateProps): Promise<string> {
    return hash(payload, 8)
  }

  async compare ({ payload, hashed }:CompareProps): Promise<boolean> {
    return compare(payload, hashed)
  }
}
