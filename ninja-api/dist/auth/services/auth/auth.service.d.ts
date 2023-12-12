import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly userService;
    login(): void;
    constructor(userService: UsersService);
    validateUser(username: string, password: string): Promise<any>;
}
