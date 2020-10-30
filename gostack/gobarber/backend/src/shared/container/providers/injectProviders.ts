import { container } from 'tsyringe'

import IMailProvider from './MailProvider/interfaces/IMailProvider'
import Etherial from './MailProvider/implementations/Etherial'

import IStorageProvider from './StorageProvider/interfaces/IStorageProvider'
import LocalStorage from './StorageProvider/implementations/LocalStorage'

import IMailTemplates from './MailTemplates/interfaces/IMailTemplates'
import HandlebarsMailTemplate from './MailTemplates/implementations/HandlebarsMailTemplate'

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
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
