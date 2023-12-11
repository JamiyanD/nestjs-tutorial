import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_SERVICE') private readonly userService: UsersService,
    ) {}
    async validateUser(username: string, password: string) {
        console.log('Inside validateUser')
        const userDB: any = await this.userService.findUserByUsername(username)
        console.log(userDB)
        if (userDB) {
            const matched = comparePasswords(password, userDB[0].password)
            if (matched) {
                console.log('User Validation Success!')
                return userDB
            } else {
                console.log('Passwords do not watch');
                return null
            }
          
       
        }
        console.log('User Validation Failed!')
        return null
    }
}
