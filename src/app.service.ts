import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
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
