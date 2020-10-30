import { container } from 'tsyringe'

import IEncrypt from './Encrypt/interfaces/IEncrypt'
import BCrypt from './Encrypt/implementations/BCrypt'

container.registerSingleton<IEncrypt>('Encrypt', BCrypt)
