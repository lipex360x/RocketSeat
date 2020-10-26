import { IParseProps } from '../../MailTemplateProvider/models/IMailTemplateProvider';

interface IMailContact {
  name: string;
  email: string;
}

export interface IMailProps {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseProps;
}

export default interface IMailProvider {
  sendMail(data: IMailProps): Promise<void>;
}
