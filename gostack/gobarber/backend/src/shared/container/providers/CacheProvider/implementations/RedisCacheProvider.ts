import Redis, { Redis as RedisClient } from 'ioredis'
import ICacheProvider, { DeleteCacheProps, GetCacheProps, SaveCacheProps, TruncateAllProps } from '../interfaces/ICacheProvider'

export default class RedisCacheProvider implements ICacheProvider {
  private client: RedisClient

  constructor () {
    this.client = new Redis()
  }

  async saveCache ({ key, value }:SaveCacheProps): Promise<void> {

  }

  async getCache ({ key }:GetCacheProps): Promise<string> {
    return ''
  }

  async deleteCache ({ key }:DeleteCacheProps): Promise<void> {

  }

  async truncateAll ({ key }:TruncateAllProps): Promise<void> {

  }
}
