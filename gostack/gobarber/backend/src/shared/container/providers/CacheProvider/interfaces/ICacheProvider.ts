export interface SaveCacheProps {
  key: string
  value: any
}

export interface GetCacheProps {
  key: string
}

export interface DeleteCacheProps {
  key: string
}

export interface TruncateAllProps {
  key: string
}

export default interface ICacheProvider {
  saveCache(data: SaveCacheProps): Promise<void>
  getCache<T>(data: GetCacheProps): Promise<T>
  deleteCache(data: DeleteCacheProps): Promise<void>
  truncateAll(data: TruncateAllProps): Promise<void>
}
