import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist'));

  app.setViewEngine('hbs');
  app.setBaseViewsDir(path.join(__dirname, '..', 'src', 'views'));

  await app.listen(3000);
}
bootstrap();
