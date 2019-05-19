import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizListComponent } from './pages/quiz-list/quiz-list.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizResultComponent } from './pages/quiz-result/quiz-result.component';
import { AnswerListComponent } from './pages/answer-list/answer-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: QuizListComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'quiz/:id/results', component: QuizResultComponent },
  { path: 'quiz/:id/answers', component: AnswerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
