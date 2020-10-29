export interface EncryptProps {
  payload: string
}

export interface CompareProps {
  payload: string
  hashed: string
}

export default interface IEncrypt {
  encrypt(data: EncryptProps): Promise<string>
  compare(data: CompareProps): Promise<boolean>
}
