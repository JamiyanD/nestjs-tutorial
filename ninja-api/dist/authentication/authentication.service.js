"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const ninjas_service_1 = require("../ninjas/ninjas.service");
const prisma_service_1 = require("../prisma.service");
const bcrypt = require("bcrypt");
const ninjas_model_1 = require("../ninjas/ninjas.model");
let AuthService = class AuthService {
    constructor(prismaService, jwtService, ninjasService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
        this.ninjasService = ninjasService;
    }
    async login(LoginDto) {
        const { username, password } = LoginDto;
        const ninjas = await this.prismaService.ninjas.findUnique({
            where: { username }
        });
        if (!ninjas) {
            throw new common_1.NotFoundException('user not found');
        }
        const validatePassword = await bcrypt.compare(password, ninjas.password);
        if (!validatePassword) {
            throw new common_1.NotFoundException('Invalid password');
        }
        return {
            token: this.jwtService.sign({ username })
        };
    }
    async register(createDto) {
        const createNinjas = new ninjas_model_1.Ninjas();
        createNinjas.name = createDto.name;
        createNinjas.email = createDto.email;
        createNinjas.username = createDto.username;
        createNinjas.password = await bcrypt.hash(createDto.password, 10);
        const ninja = await this.ninjasService.createNinja(createNinjas);
        return {
            token: this.jwtService.sign({ username: ninja.username })
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        ninjas_service_1.NinjasService])
], AuthService);
//# sourceMappingURL=authentication.service.js.map