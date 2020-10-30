import { v4 as uuid } from 'uuid'

import UserToken from '@modules/users/entities/UserToken'
import IUserTokensRepository, { GenerateProps } from '../interfaces/IUserTokensRepository'

export default class FakeUserTokensRepository implements IUserTokensRepository {
  private userTokens:UserToken[] = []

  async generate ({ user_id }:GenerateProps): Promise<UserToken> {
    const userToken = new UserToken()

    Object.assign(userToken, {
      user_id,
      token: uuid()
    })

    this.userTokens.push(userToken)

    return userToken
  }
}
