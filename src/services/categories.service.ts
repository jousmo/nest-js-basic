import { Injectable, NotFoundException } from '@nestjs/common';
import {
  Category,
  CategoryWithPagination,
  CategoryWithProducts,
  CategoryWithProduct,
} from '../entities/category.entity';
import { Product } from '../entities/product.entity';
import { categories, categoriesWithProducts } from '../db/categories.db';
import { products } from '../db/products.db';

@Injectable()
export class CategoriesService {
  #products: Product[] = products;
  #categories: Category[] = categories;
  #categoriesWithProducts: CategoryWithProducts[] = categoriesWithProducts;

  #findIndexCategory(categoryId: number): number {
    const index: number = this.#categories.findIndex(
      (category) => category.id === categoryId,
    );

    if (index === -1) throw new NotFoundException('category not found');

    return index;
  }

  #findIndexProducts(productId: number): number {
    const index: number = this.#products.findIndex(
      (product) => product.id === productId,
    );

    if (index === -1) throw new NotFoundException('product not found');

    return index;
  }

  getCategories(limit: number, offset: number): CategoryWithPagination {
    let allCategories: Category[] = this.#categories;

    if (limit && offset) {
      allCategories = allCategories.slice(offset, limit);
    }

    return {
      limit,
      offset,
      count: allCategories.length,
      categories: allCategories,
    };
  }

  getCategory(categoryId: number): Category {
    this.#findIndexCategory(categoryId);

    return this.#categories.find((category) => category.id === categoryId);
  }

  getProductsByCategory(
    categoryId: number,
    productId: number,
  ): CategoryWithProduct {
    this.#findIndexCategory(categoryId);
    this.#findIndexProducts(productId);
    let existProduct = false;

    for (const categories of this.#categoriesWithProducts) {
      for (const id of categories.products) {
        if (productId === id) {
          existProduct = true;
        }
      }
    }

    if (!existProduct)
      throw new NotFoundException('product in category not found');

    const category: Category = this.#categories.find(
      (category) => category.id === categoryId,
    );

    const product: Product = this.#products.find(
      (product) => product.id === productId,
    );

    return {
      ...category,
      product,
    };
  }
}
