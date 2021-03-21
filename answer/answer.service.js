"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerService = void 0;
const common_1 = require("@nestjs/common");
const answer_entity_1 = require("./entities/answer.entity");
const visit_entity_1 = require("../visit/entities/visit.entity");
let AnswerService = class AnswerService {
    async create(createAnswerDto) {
        const answer = new answer_entity_1.Answer();
        answer.text = createAnswerDto.text;
        answer.category = createAnswerDto.category;
        answer.subcategory = createAnswerDto.subcategory;
        answer.answer = createAnswerDto.answer;
        answer.isCorrect = createAnswerDto.isCorrect;
        const visit = await visit_entity_1.Visit.findOne(createAnswerDto.visitId);
        answer.visit = visit;
        await answer.save();
        return answer;
    }
};
AnswerService = __decorate([
    common_1.Injectable()
], AnswerService);
exports.AnswerService = AnswerService;
//# sourceMappingURL=answer.service.js.map