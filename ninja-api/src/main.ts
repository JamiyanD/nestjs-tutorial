import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
import * as passport from 'passport'
import { TypeormStore } from 'connect-typeorm';
import { getRepository } from 'typeorm';
import { SessionEntity } from './typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const sessionRepository = getRepository(SessionEntity)

  app.setGlobalPrefix('api');
  // app.use(session({
  //   name: 'NESTJS_SESSION_ID',
  //   secret: 'Dadsa',
  //   resave: false,
  //   saveUninitialized: false,
  //   cookie: {
  //     maxAge: 60000,
  //   },
  //   store: new TypeormStore({
  //     cleanupLimit: 10,
  //   }).connect(sessionRepository)
  // }))
  // app.use(passport.initialize())
  // app.use(passport.session())
  await app.listen(3000);
}
bootstrap();
