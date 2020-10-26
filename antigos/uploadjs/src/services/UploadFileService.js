import Post from '../models/Post'

class UploadFileService {
  async execute( file ){
    const { originalname, key, size, location: url = '' } = file;

    const uploadFile = await Post.create({
      originalname,
      key,
      size,
      url
    });

    return uploadFile;
  }
}

export default UploadFileService
