import Redis, { Redis as RedisClient } from 'ioredis'
import ICacheProvider, { DeleteCacheProps, GetCacheProps, SaveCacheProps, TruncateAllProps } from '../interfaces/ICacheProvider'

import cacheConfig from '../config/cache.config'

export default class RedisCacheProvider implements ICacheProvider {
  private client: RedisClient

  constructor () {
    this.client = new Redis(cacheConfig.config.redis)
  }

  async saveCache ({ key, value }:SaveCacheProps): Promise<void> {
    await this.client.set(key, JSON.stringify(value))
  }

  async getCache ({ key }:GetCacheProps): Promise<string> {
    const data = await this.client.get(key)

    return data
  }

  async deleteCache ({ key }:DeleteCacheProps): Promise<void> {

  }

  async truncateAll ({ key }:TruncateAllProps): Promise<void> {

  }
}
