import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
export declare class AnswerController {
    private readonly answerService;
    constructor(answerService: AnswerService);
    create(createAnswerDto: CreateAnswerDto): Promise<import("./entities/answer.entity").Answer>;
}
