import Post from '../models/Post'
import fs from 'fs';
import path from 'path';
import aws from 'aws-sdk';

class DeleteFileService {
  s3 = new aws.S3();

  async execute(id){

    const file = await Post.findById(id);

    if(process.env.STORAGE_TYPE === 'local'){
      if(file){
        const localFile = path.resolve(__dirname,'..','..','tmp', file.key);
        await fs.promises.unlink(localFile);
      }
      return;
    }

    await this.s3.deleteObject({
      Bucket: process.env.AWS_BUCKET,
      Key: file.key,
    }).promise()

    await file.remove();

    return;
  }
}

export default DeleteFileService;
