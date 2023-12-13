import { HttpException, HttpStatus } from "@nestjs/common";

export class UserNotFoundException extends HttpException {
    constructor(msg?: string, status?: HttpStatus) {
        super(msg || 'User bhq bna', status || HttpStatus.BAD_REQUEST);
    }
}