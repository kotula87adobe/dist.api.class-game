import { CreateVisitDto } from './dto/create-visit.dto';
import { Visit } from "./entities/visit.entity";
export declare class VisitService {
    create(createVisitDto: CreateVisitDto): Promise<Visit>;
}
