import IEncrypt, { CompareProps, EncryptProps } from '../interfaces/IEncrypt'

export default class FakeEncrypt implements IEncrypt {
  async encrypt ({ payload }:EncryptProps): Promise<string> {
    return payload
  }

  async compare ({ payload, hashed }:CompareProps): Promise<boolean> {
    return payload === hashed
  }
}
