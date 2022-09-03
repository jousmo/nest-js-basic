import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ): object {
    return this.appService.getProducts(limit, offset, brand);
  }

  @Get('products/:productId')
  getProduct(@Param() params: any): object {
    return this.appService.getProduct(params);
  }

  @Get('categories/:categoryId/products/:productId')
  getProductsByCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ): object {
    return this.appService.getProductsByCategory(categoryId, productId);
  }
}
