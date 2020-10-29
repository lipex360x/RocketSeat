import fs from 'fs'
import path from 'path'

import uploladConfig from '@config/upload.config'
import IStorageFiles, { DeleteFileProps, SaveFileProps } from '../IStorageFiles'

export default class LocalStorage implements IStorageFiles {
  async saveFile ({ file }:SaveFileProps): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploladConfig.tmpFolder, file),
      path.resolve(uploladConfig.uploadFolder, file)
    )
    return file
  };

  async deleteFile ({ file }:DeleteFileProps): Promise<void> {
    const filePath = path.resolve(uploladConfig.uploadFolder, file)

    try {
      await fs.promises.stat(filePath)
    } catch {
      return
    }

    await fs.promises.unlink(filePath)
  };
}
