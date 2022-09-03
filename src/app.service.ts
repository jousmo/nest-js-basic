import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProducts(limit = 2, offset = 0, brand = ''): object {
    return {
      limit,
      offset,
      brand,
      products: [
        {
          id: 1,
          name: 'Pepsi',
          price: 15,
        },
        {
          id: 2,
          name: 'Coca Cola',
          price: 16,
        },
      ],
    };
  }

  getProduct(params: any): object {
    const { productId } = params;
    return {
      id: productId,
      name: 'Pepsi',
      price: 15,
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
