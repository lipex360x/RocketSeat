interface ITemplateVariables {
  [key: string]: string | number;
}

export interface IParseProps {
  file: string;
  variables: ITemplateVariables;
}

export default interface IMailTemplateProvider {
  parse(data: IParseProps): Promise<string>;
}
