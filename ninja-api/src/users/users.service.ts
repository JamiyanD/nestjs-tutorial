import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  private fakeUsers = [
    {username: 'Anson', email: 'anson@gmail.com'},
    {username: 'Cory', email: 'cory@gmail.com'},
    {username: 'Greg', email: 'greg@gmail.com'},
  ]

  create(createUserDto: CreateUserDto) {
    this.fakeUsers.push(createUserDto)
    return {};
  }

  findAll() {
    return this.fakeUsers;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
