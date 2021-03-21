"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitService = void 0;
const common_1 = require("@nestjs/common");
const visit_entity_1 = require("./entities/visit.entity");
const user_entity_1 = require("../user/entities/user.entity");
let VisitService = class VisitService {
    async create(createVisitDto) {
        const user = await user_entity_1.User.findOne(createVisitDto.userId);
        const visit = new visit_entity_1.Visit();
        visit.user = user;
        await visit.save();
        return visit;
    }
};
VisitService = __decorate([
    common_1.Injectable()
], VisitService);
exports.VisitService = VisitService;
//# sourceMappingURL=visit.service.js.map