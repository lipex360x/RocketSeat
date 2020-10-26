import IStorageProvider, {
  IDeleteFileProps,
  ISaveFileProps,
} from '../models/IStorageProvider';

export default class FakeStorageProvider implements IStorageProvider {
  private storageFile: string[] = [];

  public async saveFile({ file }: ISaveFileProps): Promise<string> {
    this.storageFile.push(file);

    return file;
  }

  public async deleteFile({ file }: IDeleteFileProps): Promise<void> {
    const getIndex = this.storageFile.findIndex(
      storageFile => storageFile === file,
    );

    if (getIndex) {
      this.storageFile.splice(getIndex, 1);
    }
  }
}
