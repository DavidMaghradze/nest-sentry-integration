import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';

async function bootstrap() {
  const app = await Nest
  Sentry.init({
    dsn: 'https://20e4886a85b4441890874ed34c3891fc@o4505132704595968.ingest.sentry.io/4505132706955264',
  });
  
  await app.listen(3000);
}
bootstrap();
