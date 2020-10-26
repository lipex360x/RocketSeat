import { v4 as uuid } from 'uuid'

export default class Appointment {
  id: string

  provider: string

  date: Date
  constructor (props: Omit<Appointment, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) this.id = uuid()
  }
}
