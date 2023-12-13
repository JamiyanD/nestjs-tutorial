import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User as UserEntity } from 'src/typeorm';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  // constructor(@InjectRepository(UserEntity) 
  // private readonly userRepository: Repository<UserEntity>
  // ) {}

  private fakeUsers = [
    { id: 1, name: 'Anson', email: 'jaya@itrip.mn'},
    { id: 2, name: 'Cory', email: 'khagi@itrip.mn'},
    { id: 3, name: 'Greg', email: 'greg@itrip.mn'},
  ]

  create(createUserDto: CreateUserDto) {
    this.fakeUsers.push(createUserDto);
    // const password = encodePassword(createUserDto.password)
    // const newUser = this.userRepository.create({...createUserDto, password})
    // return this.userRepository.save(newUser);
  }

  findAll() {
    return this.fakeUsers;
  }

  findOne(id: number) {
    return this.fakeUsers.find((user) => user.id === id)
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
    // return this.userRepository.findBy({ username })
  }

  findUserById(id: number) {
    console.log(id)
    // return this.userRepository.findBy({id})
  }
}
