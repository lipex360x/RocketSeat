import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import path from 'path';
import multer from 'multer';

import uploadConfig from '../config/upload.config';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import DeleteTransactionService from '../services/DeleteTransactionService';
import ImportTransactionsService from '../services/ImportTransactionsService';

const transactionsRouter = Router();
const upload = multer(uploadConfig);

transactionsRouter.get('/', async (request, response) => {
  const repository = getCustomRepository(TransactionsRepository);

  const transactions = await repository.find({
    relations: ['category'],
  });

  const balance = await repository.getBalance();

  return response.json({ transactions, balance });
});

transactionsRouter.post('/', async (request, response) => {
  const { title, value, type, category } = request.body;
  const service = new CreateTransactionService();

  const transaction = await service.execute({
    title,
    value,
    type,
    category,
  });

  return response.json(transaction);
});

transactionsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const service = new DeleteTransactionService();
  await service.execute(id);

  return response.send();
});

transactionsRouter.post(
  '/import',
  upload.single('file'),
  async (request, response) => {
    const { filename, destination } = request.file;
    const report = path.join(destination, filename);

    const service = new ImportTransactionsService();

    const importCsv = await service.execute({ csvFilename: report });

    return response.json(importCsv);
  },
);

export default transactionsRouter;
