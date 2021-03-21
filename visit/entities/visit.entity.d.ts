import { BaseEntity } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { Answer } from "../../answer/entities/answer.entity";
export declare class Visit extends BaseEntity {
    id: string;
    createdAt: Date;
    user: User;
    answer: Answer;
}
