import fs from 'fs';
import path from 'path';

import uploadConfig from '@config/upload.config';

import IStorageProvider, {
  ISaveFileProps,
  IDeleteFileProps,
} from '../models/IStorageProvider';

export default class DiskStorageProvider implements IStorageProvider {
  public async saveFile({ file }: ISaveFileProps): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadConfig.tmpFolder, file),
      path.resolve(uploadConfig.uploadFolder, file),
    );
    return file;
  }

  public async deleteFile({ file }: IDeleteFileProps): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadFolder, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}
