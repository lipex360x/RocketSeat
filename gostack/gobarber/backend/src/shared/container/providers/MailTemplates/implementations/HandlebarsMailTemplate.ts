import handlebars from 'handlebars'

import IMailTemplates, { ParserProps } from '../interfaces/IMailTemplates'

export default class HandlebarsMailTemplate implements IMailTemplates {
  async parser ({ template, variables }:ParserProps): Promise<string> {
    const parseTemplate = handlebars.compile(template)

    return parseTemplate(variables)
  }
}
