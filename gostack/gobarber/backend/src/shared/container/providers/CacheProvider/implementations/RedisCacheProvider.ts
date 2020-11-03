import Redis, { Redis as RedisClient } from 'ioredis'
import ICacheProvider, { DeleteCacheProps, GetCacheProps, SaveCacheProps, DeletePrefixProps } from '../interfaces/ICacheProvider'

import cacheConfig from '../config/cache.config'

export default class RedisCacheProvider implements ICacheProvider {
  private client: RedisClient

  constructor () {
    this.client = new Redis(cacheConfig.config.redis)
  }

  async saveCache ({ key, value }:SaveCacheProps): Promise<void> {
    await this.client.set(key, JSON.stringify(value))
  }

  async getCache<T> ({ key }:GetCacheProps): Promise<T> {
    const data = await this.client.get(key)
    const parsedData = JSON.parse(data) as T

    return parsedData || null
  }

  async deleteCache ({ key }:DeleteCacheProps): Promise<void> {

  }

  async deletePrefix ({ key }:DeletePrefixProps): Promise<void> {
    const keys = await this.client.keys(`${key}:*`)

    const pipeline = this.client.pipeline()

    keys.forEach(key => {
      pipeline.del(key)
    })

    await pipeline.exec()
  }
}
