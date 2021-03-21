import { BaseEntity } from "typeorm";
import { Visit } from "../../visit/entities/visit.entity";
export declare class Answer extends BaseEntity {
    id: string;
    category: string;
    subcategory: string;
    text: string;
    answer: string;
    isCorrect: boolean;
    visit: Visit;
    createdAt: Date;
}
