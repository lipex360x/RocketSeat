interface Response {
  filename: string;
  extension: string;
}

export default function (filename: string): Response {
  const ext = /^.+\.([^.]+)$/.exec(filename);
  let [name] = filename.split(`.${ext[1]}`);

  name = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/([^\w]+|\s+)/g, '-') // Substitui espaço e outros caracteres por hífen
    .replace(/\-\-+/g, '-') // Substitui multiplos hífens por um único hífen
    .replace(/(^-+|-+$)/, ''); // Remove hífens extras do final ou do inicio da string

  const file = {
    filename: name.toLowerCase(),
    extension: ext[1],
  };

  return file;
}
