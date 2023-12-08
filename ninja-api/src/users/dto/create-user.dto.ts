import { Exclude } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @MinLength(3)
    username: string;

    // @Exclude()
    password: string

    email:string
}
