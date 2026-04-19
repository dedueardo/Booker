import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { BooksModule } from './books/books.module';

async function bootstrap() {
  const app = await NestFactory.create(BooksModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
