import IMailTemplates, { ParserProps } from '../interfaces/IMailTemplates'

export default class FakeMailTemplate implements IMailTemplates {
  async parser ({ template, variables }:ParserProps): Promise<string> {
    return template
  }
}
