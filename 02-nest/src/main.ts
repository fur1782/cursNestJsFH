import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true, // Borra els elements no necessaris
    forbidNonWhitelisted: true, // Salta error si hi han més dels elements necessaris
    }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
