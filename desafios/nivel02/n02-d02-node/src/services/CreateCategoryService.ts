import { getRepository } from 'typeorm';
import Category from '../models/Category';

interface Request {
  title: string;
}

class CreateCategoryService {
  public async execute({ title }: Request): Promise<Category> {
    const repository = getRepository(Category);

    const getCategory = await repository.findOne({
      where: { title },
    });

    if (!getCategory) {
      const setCategory = repository.create({ title });
      await repository.save(setCategory);
      return setCategory;
    }

    return getCategory;
  }
}

export default CreateCategoryService;
