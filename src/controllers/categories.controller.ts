import {
  Controller,
  Get,
  Param,
  HttpCode,
  HttpStatus,
  Res,
  Query,
} from '@nestjs/common';
import { Response } from 'express';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getCategories(
    @Res() response: Response,
    @Query('limit') limit: number,
    @Query('offset') offset: number,
  ): any {
    const categories = this.categoriesService.getCategories(limit, offset);
    response.status(200).send(categories);
  }

  @Get(':categoryId')
  @HttpCode(HttpStatus.ACCEPTED)
  getCategory(@Param('categoryId') categoryId: string): object {
    return this.categoriesService.getCategory(categoryId);
  }

  @Get(':categoryId/products/:productId')
  getProductsByCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ): object {
    return this.categoriesService.getProductsByCategory(categoryId, productId);
  }
}
