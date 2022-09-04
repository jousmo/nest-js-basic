import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
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
