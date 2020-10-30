export interface GenerateProps {
  payload: string
}

export interface CompareProps {
  payload: string
  hashed: string
}

export default interface IEncrypt {
  generate(data: GenerateProps): Promise<string>
  compare(data: CompareProps): Promise<boolean>
}
