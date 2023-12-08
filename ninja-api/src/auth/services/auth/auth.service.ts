import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_SERVICE') private readonly userService: UsersService,
    ) {}
    async validateUser(username: string, password: string) {
        console.log('Inside validateUser')
        const userDB: any = await this.userService.findUserByUsername(username)

        if (userDB && userDB[0].password === password) {
            console.log('User Validation Success!')
            console.log(userDB)
            return userDB
        }
        console.log('User Validation Failed!')
        return null
    }
}
