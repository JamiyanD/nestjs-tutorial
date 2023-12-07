import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log(value)
    console.log('Inside pipe')
    console.log(metadata)

    const parseAgtoInt = parseInt(value.age.toString())
    if(isNaN(parseAgtoInt)) {
      console.log(`${value.age} is not a number`)
      throw new HttpException('Invalid Data Type for', HttpStatus.BAD_REQUEST)
    } 
    console.log(`${value.age} is  a number`)
      return {...value, age: parseAgtoInt}
  
  }
}
