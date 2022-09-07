import {
  Controller,
  Get,
  Param,
  HttpCode,
  HttpStatus,
  Res,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { CategoriesService } from '../services/categories.service';
import {
  Category,
  CategoryWithPagination,
  CategoryWithProduct,
} from '../entities/category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getCategories(
    @Res() response: Response,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
  ): any {
    const categories: CategoryWithPagination =
      this.categoriesService.getCategories(limit, offset);
    response.status(200).send(categories);
  }

  @Get(':categoryId')
  @HttpCode(HttpStatus.ACCEPTED)
  getCategory(@Param('categoryId', ParseIntPipe) categoryId: number): Category {
    return this.categoriesService.getCategory(categoryId);
  }

  @Get(':categoryId/products/:productId')
  getProductsByCategory(
    @Param('categoryId', ParseIntPipe) categoryId: number,
    @Param('productId', ParseIntPipe) productId: number,
  ): CategoryWithProduct {
    return this.categoriesService.getProductsByCategory(categoryId, productId);
  }
}
