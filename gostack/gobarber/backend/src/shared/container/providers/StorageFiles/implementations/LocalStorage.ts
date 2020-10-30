import fs from 'fs'
import path from 'path'

import storageConfig from '@shared/container/providers/StorageFiles/config/storage.config'
import IStorageFiles, { DeleteFileProps, SaveFileProps } from '../models/IStorageFiles'

export default class LocalStorage implements IStorageFiles {
  async saveFile ({ file }:SaveFileProps): Promise<string> {
    await fs.promises.rename(
      path.resolve(storageConfig.tmpFolder, file),
      path.resolve(storageConfig.uploadFolder, file)
    )
    return file
  };

  async deleteFile ({ file }:DeleteFileProps): Promise<void> {
    const filePath = path.resolve(storageConfig.uploadFolder, file)

    try {
      await fs.promises.stat(filePath)
    } catch {
      return
    }

    await fs.promises.unlink(filePath)
  };
}
