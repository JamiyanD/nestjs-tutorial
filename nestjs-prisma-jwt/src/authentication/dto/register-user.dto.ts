import { IsString, Length } from "class-validator";


export class RegisterUsersDto {
     username: string;
     password: string
     name: string
     email:string
}