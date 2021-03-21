import { VisitService } from './visit.service';
import { CreateVisitDto } from './dto/create-visit.dto';
export declare class VisitController {
    private readonly visitService;
    constructor(visitService: VisitService);
    create(createVisitDto: CreateVisitDto): Promise<import("./entities/visit.entity").Visit>;
}
