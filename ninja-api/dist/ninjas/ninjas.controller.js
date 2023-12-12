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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NinjasController = void 0;
const common_1 = require("@nestjs/common");
const ninjas_service_1 = require("./ninjas.service");
let NinjasController = class NinjasController {
    constructor(ninjasService) {
        this.ninjasService = ninjasService;
    }
    async getAllNinjas(request, response) {
        try {
            const result = await this.ninjasService.getAllNinjas();
            return response.status(200).json({
                status: 'Ok!',
                message: 'Successfully fetch data!',
                result: result
            });
        }
        catch (err) {
            return response.status(500);
        }
    }
};
exports.NinjasController = NinjasController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NinjasController.prototype, "getAllNinjas", null);
exports.NinjasController = NinjasController = __decorate([
    (0, common_1.Controller)('ninjas'),
    __metadata("design:paramtypes", [ninjas_service_1.NinjasService])
], NinjasController);
//# sourceMappingURL=ninjas.controller.js.map