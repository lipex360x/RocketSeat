import { container } from 'tsyringe'

import IMailProvider from './MailProvider/interfaces/IMailProvider'
import Etherial from './MailProvider/implementations/Etherial'

import IStorageFiles from './StorageFiles/interfaces/IStorageFiles'
import LocalStorage from './StorageFiles/implementations/LocalStorage'

import IMailTemplates from './MailTemplates/interfaces/IMailTemplates'
import HandlebarsMailTemplate from './MailTemplates/implementations/HandlebarsMailTemplate'

container.registerSingleton<IStorageFiles>(
  'StorageFiles',
  LocalStorage
)

container.registerSingleton<IMailTemplates>(
  'MailTemplate',
  HandlebarsMailTemplate
)

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(Etherial)
)
