export interface ISaveFileProps {
  file: string;
}
export interface IDeleteFileProps {
  file: string;
}

export default interface IStorageProvider {
  saveFile(data: ISaveFileProps): Promise<string>;
  deleteFile(data: IDeleteFileProps): Promise<void>;
}
