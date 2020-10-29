import IStorageFiles, { DeleteFileProps, SaveFileProps } from '../IStorageFiles'

export default class FakeStorageFiles implements IStorageFiles {
  private storage:string[] = []

  async saveFile ({ file }:SaveFileProps): Promise<string> {
    this.storage.push(file)

    return file
  };

  async deleteFile ({ file }:DeleteFileProps): Promise<void> {
    const findIndex = this.storage.findIndex(storageFile => storageFile === file)

    this.storage.splice(findIndex, 1)
  };
}
