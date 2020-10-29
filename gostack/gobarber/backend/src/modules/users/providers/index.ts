import { container } from 'tsyringe'

import IEncrypt from './Encrypt/IEncrypt'
import BCrypt from './Encrypt/implementations/BCrypt'

container.registerSingleton<IEncrypt>('Encrypt', BCrypt)
