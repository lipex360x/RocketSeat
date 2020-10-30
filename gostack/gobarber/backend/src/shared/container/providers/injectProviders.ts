import { container } from 'tsyringe'

import ISendMails from './SendMails/interfaces/ISendMails'
import Etherial from './SendMails/implementations/Etherial'

import IStorageFiles from './StorageFiles/interfaces/IStorageFiles'
import LocalStorage from './StorageFiles/implementations/LocalStorage'

container.registerSingleton<IStorageFiles>(
  'StorageFiles',
  LocalStorage
)

container.registerInstance<ISendMails>(
  'SendMail',
  new Etherial()
)
