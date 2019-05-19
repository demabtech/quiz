import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'qz-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {

  quiz: Quiz;
  totalQuestions: number;
  score: number;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.getQuizById(+p['id']);
    });
  }

  getQuizById(id: number) {
    this.quiz = this.quizService.getQuizById(id);
    this.totalQuestions = this.quiz.questions.length;
    this.score = this.quizService.getScore(this.quiz.questions);
  }
}