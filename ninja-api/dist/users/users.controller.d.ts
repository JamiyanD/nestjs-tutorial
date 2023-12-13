import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
    getById(id: number): {
        id: number;
        name: string;
        email: string;
    };
}
