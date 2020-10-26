import IMailProvider, { IMailProps } from '../models/IMailProvider';

export default class FakeMailProvider implements IMailProvider {
  private localDB: IMailProps[] = [];

  public async sendMail(data: IMailProps): Promise<void> {
    this.localDB.push(data);
  }
}
