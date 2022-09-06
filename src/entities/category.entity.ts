import { Pagination } from './pagination.entiity';
import { Product } from './product.entity';

export type Category = {
  id?: number;
  name: string;
};

export type CategoryWithPagination = Pagination & {
  categories: Category[];
};

export type CategoryWithProducts = Category & {
  products: number[];
};

export type CategoryWithProduct = Category & {
  product: Product;
};
