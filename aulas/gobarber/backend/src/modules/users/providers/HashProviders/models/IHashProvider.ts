export interface IGenerateHashProps {
  password: string;
}

export interface ICompareHashProps {
  password: string;
  hashedpassword: string;
}

export default interface IHashProvider {
  generateHash(data: IGenerateHashProps): Promise<string>;
  compareHash(data: ICompareHashProps): Promise<boolean>;
}
