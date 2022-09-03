import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
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
