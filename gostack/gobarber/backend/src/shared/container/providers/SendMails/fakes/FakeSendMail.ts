import ISendMails, { SendMailProps } from '../models/ISendMails'

export default class FakeSendMail implements ISendMails {
  private messages: SendMailProps[] = []
  async sendMail ({ to, body }:SendMailProps): Promise<void> {
    this.messages.push({
      to,
      body
    })
  }
}
