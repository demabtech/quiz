import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/models/quiz';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'qz-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {

  quiz: Quiz;
  totalQuestions: number;
  score: number;
  duration: string;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private timerService: TimerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.quiz = this.quizService.getQuizById(+p['id']);
      this.totalQuestions = this.quiz.questions.length;
      this.score = this.quizService.getScore(this.quiz.questions);
      this.duration = this.timerService.getTime();
    });
  }

}