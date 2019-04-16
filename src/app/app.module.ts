import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionsComponent } from './questions/questions.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { reducers } from 'src/Store';
import { DatabaseApiService } from './database-api.service';
import { getDataToStore } from './resolve.chapters';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    QuestionListComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [DatabaseApiService,getDataToStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
