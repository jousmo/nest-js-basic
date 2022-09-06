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
import { Product, ProductWithPagination } from '../entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ): ProductWithPagination {
    return this.productsService.getProducts(limit, offset, brand);
  }

  @Get(':productId')
  getProduct(@Param() params: any): Product {
    return this.productsService.getProduct(params);
  }

  @Post()
  createProduct(@Body() payload: Product): Product {
    return this.productsService.createProduct(payload);
  }

  @Put(':productId')
  updateProduct(
    @Param('productId') productId: number,
    @Body() payload: Product,
  ): Product {
    return this.productsService.updateProduct(productId, payload);
  }

  @Delete(':productId')
  deleteProduct(@Param('productId') productId: number): object {
    return this.productsService.deleteProduct(productId);
  }
}
