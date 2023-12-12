import { Request, Response } from "express";
import { AuthService } from "src/auth/services/auth/auth.service";
import { LoginDto } from "./dto/login-ninja.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(request: Request, response: Response, LoginDto: LoginDto): Promise<any>;
}
