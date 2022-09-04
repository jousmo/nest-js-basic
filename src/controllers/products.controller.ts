import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ): object {
    return this.productsService.getProducts(limit, offset, brand);
  }

  @Get(':productId')
  getProduct(@Param() params: any): object {
    return this.productsService.getProduct(params);
  }
}
