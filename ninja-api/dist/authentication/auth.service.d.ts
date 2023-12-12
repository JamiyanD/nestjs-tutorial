import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma.service";
import { NinjasService } from "src/ninjas/ninjas.service";
import { LoginDto } from "./dto/login-ninja.dto";
import { RegisterNinjasDto } from "./dto/register-ninja.dto";
export declare class AuthService {
    private readonly prismaService;
    private jwtService;
    private readonly NinjasService;
    constructor(prismaService: PrismaService, jwtService: JwtService, NinjasService: NinjasService);
    login(loginDto: LoginDto): Promise<any>;
    register(createDto: RegisterNinjasDto): Promise<any>;
}
