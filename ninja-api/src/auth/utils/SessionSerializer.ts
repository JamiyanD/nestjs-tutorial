import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "src/typeorm";
import { UsersService } from "src/users/users.service";

export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('USER_SERVICE') private readonly userService: UsersService,
    ) {
        super()
    }

    serializeUser(user: User, done: (err, user: User) => void) {
        console.log('SerializeUser')
        done(null, user.id);
    }

    async deserializeUser(user: User, done: (err, user: User) => void) {
        console.log('Desirialize User')
        const userDB = await this.userService.findUserById(user.id);
        // console.log(userDB)
        return userDB
        // return userDB ? done(null, userDB) : done(null, null)
    }
}