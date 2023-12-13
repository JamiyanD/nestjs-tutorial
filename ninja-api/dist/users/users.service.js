"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.fakeUsers = [
            { id: 1, name: 'Anson', email: 'jaya@itrip.mn' },
            { id: 2, name: 'Cory', email: 'khagi@itrip.mn' },
            { id: 3, name: 'Greg', email: 'greg@itrip.mn' },
        ];
    }
    create(createUserDto) {
        this.fakeUsers.push(createUserDto);
    }
    findAll() {
        return this.fakeUsers;
    }
    findOne(id) {
        return this.fakeUsers.find((user) => user.id === id);
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
    getUserById(id) {
        return this.fakeUsers.find((user) => user.id === id);
    }
    findUserByUsername(username) {
    }
    findUserById(id) {
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map