import nodemailer, { Transporter } from 'nodemailer'
import ISendMails, { SendMailProps } from '../interfaces/ISendMails'

export default class Etherial implements ISendMails {
  private client: Transporter

  constructor () {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: 587,
        secure: false,
        auth: {
          user: account.user,
          pass: account.pass
        }
      })

      this.client = transporter
    })
  }

  public async sendMail ({ to, body }:SendMailProps): Promise<void> {
    const message = await this.client.sendMail({
      from: 'Gobarber <sender@example.com>',
      to,
      subject: 'Recovery Password',
      text: body
    })

    console.log('Message sent: %s', message.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message))
  }
}
