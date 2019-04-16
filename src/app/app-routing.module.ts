import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { getDataToStore } from './resolve.chapters';



const routes: Routes = [
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: 'questions/post', component: QuestionsComponent },
  {
    path: 'home', component: HomeComponent, resolve: { _: getDataToStore }, children: [
      { path: '**', redirectTo: '' }
    ]
  },
  { path: '**', redirectTo: 'landingPage', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
