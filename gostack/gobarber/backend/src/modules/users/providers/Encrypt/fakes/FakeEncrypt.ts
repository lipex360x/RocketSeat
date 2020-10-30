import IEncrypt, { CompareProps, GenerateProps } from '../interfaces/IEncrypt'

export default class FakeEncrypt implements IEncrypt {
  async generate ({ password }:GenerateProps): Promise<string> {
    return password
  }

  async compare ({ password, hashed }:CompareProps): Promise<boolean> {
    return password === hashed
  }
}
