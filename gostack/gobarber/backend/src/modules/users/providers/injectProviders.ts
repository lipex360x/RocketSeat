import { container } from 'tsyringe'

import IEncryptProvider from './EncryptProvider/interfaces/IEncryptProvider'
import BCrypt from './EncryptProvider/implementations/BCrypt'

container.registerSingleton<IEncryptProvider>(
  'EncryptProvider',
  BCrypt
)
