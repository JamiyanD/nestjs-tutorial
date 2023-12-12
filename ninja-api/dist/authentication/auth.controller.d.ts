import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login-ninja.dto";
import { Request, Response } from 'express';
import { RegisterNinjasDto } from "./dto/register-ninja.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(request: Request, response: Response, loginDto: LoginDto): Promise<any>;
    register(request: Request, response: Response, registerDto: RegisterNinjasDto): Promise<any>;
}
