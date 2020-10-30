import IEncrypt, { CompareProps, GenerateProps } from '../interfaces/IEncrypt'

export default class FakeEncrypt implements IEncrypt {
  async generate ({ payload }:GenerateProps): Promise<string> {
    return payload
  }

  async compare ({ payload, hashed }:CompareProps): Promise<boolean> {
    return payload === hashed
  }
}
