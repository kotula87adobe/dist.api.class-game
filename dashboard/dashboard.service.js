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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const visit_service_1 = require("../visit/visit.service");
const answer_service_1 = require("../answer/answer.service");
let DashboardService = class DashboardService {
    constructor(userService, visitService, answerService) {
        this.userService = userService;
        this.visitService = visitService;
        this.answerService = answerService;
    }
    createUser(createUserDto) {
        return this.userService.create(createUserDto);
    }
    createVisit(createVisitDto) {
        return this.visitService.create(createVisitDto);
    }
    createAnswer(createAnswerDto) {
        return this.answerService.create(createAnswerDto);
    }
};
DashboardService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(user_service_1.UserService)),
    __param(1, common_1.Inject(visit_service_1.VisitService)),
    __param(2, common_1.Inject(answer_service_1.AnswerService)),
    __metadata("design:paramtypes", [user_service_1.UserService,
        visit_service_1.VisitService,
        answer_service_1.AnswerService])
], DashboardService);
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map