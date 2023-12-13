import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe, Query, HttpException, HttpStatus, UseGuards, UseInterceptors, ClassSerializerInterceptor, GoneException, UseFilters } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidateCreateUserPipe } from './validate-create-user/validate-create-user.pipe';
import { UsersGuard } from './users.guard';
import { UserNotFoundException } from './exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from './filters/HttpException.filter';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(UsersGuard)
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const user = this.usersService.findOne(id);
    if(!user) throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
    return  user
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get('id/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    // const user = this.usersService.getUserById(id)
    // if (user) return  user
    // else {
    //   throw new UserNotFoundException();
    // }
  }
}
