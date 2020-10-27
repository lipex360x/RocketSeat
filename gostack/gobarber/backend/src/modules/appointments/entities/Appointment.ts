import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('appointments')
export default class Appointment {
  @PrimaryColumn()
  id?: string

  @Column()
  provider: string

  @Column('time with time zone')
  date: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @BeforeInsert()
  appointmentId () {
    this.id = uuid()
  }
}
