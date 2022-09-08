import { Injectable, NotFoundException } from '@nestjs/common';
import { Product, ProductWithPagination } from '../entities/product.entity';
import { products } from '../db/products.db';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  #products: Product[] = products;

  #findIndex(productId: number): number {
    const index: number = this.#products.findIndex(
      (product) => product.id === productId,
    );

    if (index === -1) throw new NotFoundException('product not found');

    return index;
  }

  getProducts(
    limit: number,
    offset: number,
    brand = '',
  ): ProductWithPagination {
    let allProducts: Product[] = this.#products;

    if (limit && offset) {
      allProducts = allProducts.slice(offset, limit);
    }

    if (brand) {
      allProducts = allProducts.filter(
        (product) => product.name.toLowerCase() === brand.toLowerCase(),
      );
    }

    return {
      limit,
      offset,
      brand,
      count: allProducts.length,
      products: allProducts,
    };
  }

  getProduct(params: any): Product {
    const { productId } = params;
    this.#findIndex(+productId);

    return this.#products.find((product) => product.id === +productId);
  }

  createProduct(payload: CreateProductDto): Product {
    const newProduct: Product = {
      ...payload,
      id: this.#products.length + 1,
    };

    this.#products.push(newProduct);
    return newProduct;
  }

  updateProduct(productId: number, payload: UpdateProductDto): Product {
    const index: number = this.#findIndex(productId);

    this.#products[index] = {
      ...this.#products[index],
      ...payload,
    };

    return this.#products[index];
  }

  deleteProduct(productId: number): object {
    const index: number = this.#findIndex(productId);
    this.#products.splice(index, 1);

    return {
      id: productId,
    };
  }
}
