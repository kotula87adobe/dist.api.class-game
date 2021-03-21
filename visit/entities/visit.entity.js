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
exports.Visit = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/entities/user.entity");
const answer_entity_1 = require("../../answer/entities/answer.entity");
let Visit = class Visit extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Visit.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Visit.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, entity => entity.visit, { onDelete: "CASCADE" }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", user_entity_1.User)
], Visit.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(type => answer_entity_1.Answer, entity => entity.answer),
    typeorm_1.JoinColumn(),
    __metadata("design:type", answer_entity_1.Answer)
], Visit.prototype, "answer", void 0);
Visit = __decorate([
    typeorm_1.Entity()
], Visit);
exports.Visit = Visit;
//# sourceMappingURL=visit.entity.js.map