import { container } from 'tsyringe'

import IStorageFiles from './StorageFiles/interfaces/IStorageFiles'
import LocalStorage from './StorageFiles/implementations/LocalStorage'

container.registerSingleton<IStorageFiles>(
  'StorageFiles',
  LocalStorage
)
