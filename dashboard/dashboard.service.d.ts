import { UserService } from "../user/user.service";
import { VisitService } from "../visit/visit.service";
import { AnswerService } from "../answer/answer.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { CreateVisitDto } from "../visit/dto/create-visit.dto";
import { CreateAnswerDto } from "../answer/dto/create-answer.dto";
import { Visit } from "../visit/entities/visit.entity";
import { User } from "../user/entities/user.entity";
import { Answer } from "../answer/entities/answer.entity";
export declare class DashboardService {
    private userService;
    private visitService;
    private answerService;
    constructor(userService: UserService, visitService: VisitService, answerService: AnswerService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    createVisit(createVisitDto: CreateVisitDto): Promise<Visit>;
    createAnswer(createAnswerDto: CreateAnswerDto): Promise<Answer>;
}
