import { hash, compare } from 'bcryptjs'

import IEncrypt, { CompareProps, EncryptProps } from '../IEncrypt'

export default class BCrypt implements IEncrypt {
  async encrypt ({ payload }:EncryptProps): Promise<string> {
    return hash(payload, 8)
  }

  async compare ({ payload, hashed }:CompareProps): Promise<boolean> {
    return compare(payload, hashed)
  }
}
