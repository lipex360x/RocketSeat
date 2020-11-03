export interface SaveCacheProps {
  key: string
  value: string
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
  getCache(data: GetCacheProps): Promise<string>
  deleteCache(data: DeleteCacheProps): Promise<void>
  truncateAll(data: TruncateAllProps): Promise<void>
}
