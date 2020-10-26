import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';

import CreateCategoryService from './CreateCategoryService';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}
class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const repository = getCustomRepository(TransactionsRepository);
    const service = new CreateCategoryService();

    const balance = (await repository.getBalance()).total;

    if (type === 'outcome' && balance < value) {
      throw new AppError('Saldo Insuficiente');
    }

    const category_id = await service.execute({ title: category });

    const transaction = repository.create({
      title,
      value,
      type,
      category_id: category_id.id,
    });
    await repository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
