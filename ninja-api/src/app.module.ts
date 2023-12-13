import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import entities, { User } from './typeorm';



@Module({
  imports: [
     UsersModule
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
