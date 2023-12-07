import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private fakeUsers;
    create(createUserDto: CreateUserDto): {};
    findAll(): {
        username: string;
        email: string;
    }[];
    findOne(id: string): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
