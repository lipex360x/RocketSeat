import { Router }from 'express'
import multer from 'multer';
import Post from '../models/Post'

import uploadConfig from '../config/upload.config';

import UploadFileService from '../services/UploadFileService'
import DeleteFileService from '../services/DeleteFileService'

const routes = new Router();
const upload = multer(uploadConfig);

routes.get('/', async (request, response) => {
  const files = await Post.find();

  return response.json(files);
})

routes.post('/', upload.single('file'), async (request, response) => {
  const { file } = request;
  const uploadFileService = new UploadFileService();
  const fileUploadded = await uploadFileService.execute(file);

  return response.json(fileUploadded);
})

routes.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const deleteFileService = new DeleteFileService();

  await deleteFileService.execute(id);

  return response.status(200).send()
})

export default routes;
