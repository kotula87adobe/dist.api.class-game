import { BaseEntity } from "typeorm";
import { Visit } from "../../visit/entities/visit.entity";
export declare class User extends BaseEntity {
    id: string;
    name: String;
    createdAt: Date;
    visit: Visit;
}
