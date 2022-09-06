import { Pagination } from './pagination.entiity';

export type Product = {
  id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
};

export type ProductWithPagination = Pagination & {
  brand?: string;
  products: Product[];
};
