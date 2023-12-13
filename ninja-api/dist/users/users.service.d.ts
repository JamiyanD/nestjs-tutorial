import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private fakeUsers;
    create(createUserDto: CreateUserDto): void;
    findAll(): {
        id: number;
        name: string;
        email: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        email: string;
    };
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
    getUserById(id: number): {
        id: number;
        name: string;
        email: string;
    };
    findUserByUsername(username: string): void;
    findUserById(id: number): void;
}
