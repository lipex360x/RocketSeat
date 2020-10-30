import { container } from 'tsyringe'

import IStorageFiles from './StorageFiles/models/IStorageFiles'
import LocalStorage from './StorageFiles/implementations/LocalStorage'

container.registerSingleton<IStorageFiles>(
  'StorageFiles',
  LocalStorage
)
