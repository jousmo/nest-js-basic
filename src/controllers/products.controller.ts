import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { Product, ProductWithPagination } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
    @Query('brand') brand: string,
  ): ProductWithPagination {
    return this.productsService.getProducts(limit, offset, brand);
  }

  @Get(':productId')
  getProduct(@Param() params: any): Product {
    return this.productsService.getProduct(params);
  }

  @Post()
  createProduct(@Body() payload: CreateProductDto): Product {
    return this.productsService.createProduct(payload);
  }

  @Put(':productId')
  updateProduct(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() payload: UpdateProductDto,
  ): Product {
    return this.productsService.updateProduct(productId, payload);
  }

  @Delete(':productId')
  deleteProduct(@Param('productId', ParseIntPipe) productId: number): object {
    return this.productsService.deleteProduct(productId);
  }
}
