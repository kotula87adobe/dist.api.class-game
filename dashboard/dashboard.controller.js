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
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const dashboard_service_1 = require("./dashboard.service");
const create_user_dto_1 = require("../user/dto/create-user.dto");
const create_visit_dto_1 = require("../visit/dto/create-visit.dto");
const create_answer_dto_1 = require("../answer/dto/create-answer.dto");
let DashboardController = class DashboardController {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    createUser(createUserDto) {
        return this.dashboardService.createUser(createUserDto);
    }
    createVisit(createVisitDto) {
        return this.dashboardService.createVisit(createVisitDto);
    }
    createAnswer(createAnswerDto) {
        return this.dashboardService.createAnswer(createAnswerDto);
    }
};
__decorate([
    common_1.Post('/user/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "createUser", null);
__decorate([
    common_1.Post('/visit/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_visit_dto_1.CreateVisitDto]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "createVisit", null);
__decorate([
    common_1.Post('/answer/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_answer_dto_1.CreateAnswerDto]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "createAnswer", null);
DashboardController = __decorate([
    common_1.Controller('dashboard'),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardController);
exports.DashboardController = DashboardController;
//# sourceMappingURL=dashboard.controller.js.map