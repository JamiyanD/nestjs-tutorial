import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User as UserEntity } from 'src/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) 
  private readonly userRepository: Repository<UserEntity>
  ) {

  }
  private fakeUsers = [
    { username: 'Anson', password: 'anson'},
    { username: 'Cory', password: 'cory'},
    { username: 'Greg', password: 'greg'},
  ]

  create(createUserDto: CreateUserDto) {
   const newUser = this.userRepository.create(createUserDto)
    return this.userRepository.save(newUser);
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

  getUserById(id: number) {
    // return this.fakeUsers.find((user) => user.id === id)
    
  }

  findUserByUsername(username: string) {
    return this.userRepository.findBy({ username })
  }
}
