import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User as UserEntity } from 'src/typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    private fakeUsers;
    create(createUserDto: CreateUserDto): Promise<UserEntity>;
    findAll(): {
        username: string;
        password: string;
    }[];
    findOne(id: string): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
    getUserById(id: number): void;
    findUserByUsername(username: string): Promise<UserEntity[]>;
    findUserById(id: number): Promise<UserEntity[]>;
}
