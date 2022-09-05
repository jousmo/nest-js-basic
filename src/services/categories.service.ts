import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  getCategories(limit = 2, offset = 0): object {
    return {
      limit,
      offset,
      categories: [
        {
          id: 1,
          name: 'Category1',
        },
        {
          id: 2,
          name: 'Category2',
        },
      ],
    };
  }

  getCategory(categoryId: string): object {
    return {
      id: categoryId,
      name: 'Category',
    };
  }

  getProductsByCategory(categoryId: string, productId: string): object {
    return {
      id: categoryId,
      name: 'Category',
      products: {
        id: productId,
        name: 'Pepsi',
        price: 15,
      },
    };
  }
}
