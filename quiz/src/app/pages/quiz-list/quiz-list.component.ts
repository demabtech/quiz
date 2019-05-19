import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'qz-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizes: Quiz[];

  constructor(
    private quizService: QuizService
  ) { }

  ngOnInit() {
    this.quizes = this.quizService.getQuiz();
  }
}
