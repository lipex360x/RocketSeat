import UserToken from '@modules/users/entities/UserToken'

export interface GenerateProps {
  user_id: string
}

export default interface IUserTokensRepository {
  generate(data: GenerateProps): Promise<UserToken>
}
