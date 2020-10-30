interface VariablesProps {
  [key: string]: string | number
}

export interface ParserProps {
  template: string;
  variables: VariablesProps
}

export default interface IMailTemplates {
  parser(data: ParserProps): Promise<string>
}
