import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { LocalStrategy } from './utils/LocalStrategy';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './utils/SessionSerializer';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule.register({
    session: true
  })],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService
    },
    {
      provide: 'USER_SERVICE',
      useClass: UsersService
    },
    LocalStrategy,
    SessionSerializer
  ]
})
export class AuthModule {}
