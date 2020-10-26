import fs from 'fs';
import handlebars from 'handlebars';
import IMailTemplateProvider, {
  IParseProps,
} from '../models/IMailTemplateProvider';

export default class HandlebarsMailTemplate implements IMailTemplateProvider {
  public async parse({ file, variables }: IParseProps): Promise<string> {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}
