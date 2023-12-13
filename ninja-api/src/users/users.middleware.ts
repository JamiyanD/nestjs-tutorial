import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const {authorization} = req.headers;

    if (!authorization) throw new HttpException('No Authorization Token', HttpStatus.FORBIDDEN)
    if (authorization === 'hha') next();
    else throw new HttpException('No Authorization Token', HttpStatus.FORBIDDEN)
  }
}
