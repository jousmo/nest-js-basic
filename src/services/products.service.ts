import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
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

  createProduct(payload: object): object {
    return {
      ...payload,
    };
  }

  updateProduct(productId: number, payload: object) {
    return {
      id: productId,
      ...payload,
    };
  }

  deleteProduct(productId: number) {
    return {
      id: productId,
    };
  }
}
