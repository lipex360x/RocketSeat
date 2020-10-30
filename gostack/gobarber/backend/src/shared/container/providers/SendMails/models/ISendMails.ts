export interface SendMailProps {
  to: string
  body: string
}

export default interface ISendMails {
  sendMail(data: SendMailProps): Promise<void>
}
