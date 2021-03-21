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
exports.Answer = void 0;
const typeorm_1 = require("typeorm");
const visit_entity_1 = require("../../visit/entities/visit.entity");
let Answer = class Answer extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Answer.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Answer.prototype, "category", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Answer.prototype, "subcategory", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Answer.prototype, "text", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Answer.prototype, "answer", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Answer.prototype, "isCorrect", void 0);
__decorate([
    typeorm_1.ManyToOne(type => visit_entity_1.Visit, entity => entity.answer, { onDelete: "CASCADE" }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", visit_entity_1.Visit)
], Answer.prototype, "visit", void 0);
__decorate([
    typeorm_1.Column({
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Answer.prototype, "createdAt", void 0);
Answer = __decorate([
    typeorm_1.Entity()
], Answer);
exports.Answer = Answer;
//# sourceMappingURL=answer.entity.js.map