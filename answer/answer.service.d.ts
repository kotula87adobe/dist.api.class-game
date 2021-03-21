import { CreateAnswerDto } from './dto/create-answer.dto';
import { Answer } from "./entities/answer.entity";
export declare class AnswerService {
    create(createAnswerDto: CreateAnswerDto): Promise<Answer>;
}
