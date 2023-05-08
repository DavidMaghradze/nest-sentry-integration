import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';
import { InternalServerErrorException } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Sentry.init({
    dsn: 'https://20e4886a85b4441890874ed34c3891fc@o4505132704595968.ingest.sentry.io/4505132706955264',
    release: 'test-project@1.0.0',
    tracesSampleRate: 1.0,
  });

  app.use(Sentry.Handlers.requestHandler());

  const failure = async () => {
    try {
      console.log('sss');
    } catch (err) {
      throw new InternalServerErrorException("Something went wrong")
    }
  };

  failure();

  await app.listen(3000);
}
bootstrap();
