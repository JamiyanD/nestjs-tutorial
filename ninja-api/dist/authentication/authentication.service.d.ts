import { JwtService } from "@nestjs/jwt";
import { NinjasService } from "src/ninjas/ninjas.service";
import { PrismaService } from "src/prisma.service";
import { LoginDto } from "./dto/login-ninja.dto";
import { RegisterNinjasDto } from "./dto/register-ninja.dto";
export declare class AuthService {
    private readonly prismaService;
    private jwtService;
    private readonly ninjasService;
    constructor(prismaService: PrismaService, jwtService: JwtService, ninjasService: NinjasService);
    login(LoginDto: LoginDto): Promise<any>;
    register(createDto: RegisterNinjasDto): Promise<any>;
}
