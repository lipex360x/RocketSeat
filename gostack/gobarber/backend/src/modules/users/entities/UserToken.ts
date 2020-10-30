import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('user_tokens')
export default class UserToken {
  @PrimaryColumn()
  id?: string

  @Column('uuid')
  token: string

  @Column('uuid')
  user_id: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @BeforeInsert()
  async userProps () {
    this.id = uuid()
  }
}
