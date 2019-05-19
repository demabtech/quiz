import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswerListComponent } from './pages/answer-list/answer-list.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizListComponent } from './pages/quiz-list/quiz-list.component';
import { QuizResultComponent } from './pages/quiz-result/quiz-result.component';
import { QuizService } from './services/quiz.service';
import { TimerService } from './services/timer.service';

@NgModule({
  declarations: [
    AppComponent,
    AnswerListComponent,
    QuizComponent,
    QuizListComponent,
    QuizResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    QuizService,
    TimerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
