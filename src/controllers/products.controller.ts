import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
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

  @Post()
  createProduct(@Body() payload: object): object {
    return this.productsService.createProduct(payload);
  }

  @Put(':productId')
  updateProduct(
    @Param('productId') productId: number,
    @Body() payload: object,
  ): object {
    return this.productsService.updateProduct(productId, payload);
  }

  @Delete(':productId')
  deleteProduct(@Param('productId') productId: number): object {
    return this.productsService.deleteProduct(productId);
  }
}
