import { Exclude } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, MinLength, IsNumberString } from "class-validator";

export class CreateUserDto {

    @IsNumberString()
    id: number;
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email:string;
}
