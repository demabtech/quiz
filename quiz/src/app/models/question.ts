import { Answer } from './answer';

export class Question {
    id: number;
    quizId: number;
    name: string;
    questionTypeId: number;
    answers: Answer[];
}