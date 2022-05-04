import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as dotenv from 'dotenv';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  dotenv.config();
  app.use(morgan('dev'));
  app.use(helmet());
  app.enableCors();
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
    }),
  );
  await app.listen(process.env.PORT);
}
bootstrap();
