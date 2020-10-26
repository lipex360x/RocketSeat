import multer from 'multer';
import path from 'path';
import crypt from 'crypto';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');


const storageTypes = {
  local: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const ext = /^.+\.([^.]+)$/.exec(file.originalname) || '';
      let [name] = file.originalname.split(`.${ext[1]}`);

      name = name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/([^\w]+|\s+)/g, '-')
        .replace(/\-\-+/g, '-')
        .replace(/(^-+|-+$)/, '')
        .toLowerCase();

      const fileText = `${name}.${ext[1]}`;

      const fileHash = crypt.randomBytes(10).toString('HEX');
      file.key = `${fileHash}-${fileText}`;

      return callback(null, file.key);
    },
  }),

  s3: multerS3({
    s3: new aws.S3(),
    bucket: process.env.AWS_BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE, // Exibição no Browser
    acl: 'public-read',
    key: (request, file, callback) => {
      const ext = /^.+\.([^.]+)$/.exec(file.originalname) || '';
      let [name] = file.originalname.split(`.${ext[1]}`);

      name = name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/([^\w]+|\s+)/g, '-')
        .replace(/\-\-+/g, '-')
        .replace(/(^-+|-+$)/, '')
        .toLowerCase();

      const fileText = `${name}.${ext[1]}`;

      const fileHash = crypt.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${fileText}`;

      return callback(null, fileName);
    }
  })
}

export default {
  directory: tmpFolder,
  storage: storageTypes[process.env.STORAGE_TYPE],
};
