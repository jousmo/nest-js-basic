import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(':categoryId/products/:productId')
  getProductsByCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ): object {
    return this.categoriesService.getProductsByCategory(categoryId, productId);
  }
}
