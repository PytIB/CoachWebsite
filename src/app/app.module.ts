import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { IndividualLessonsComponent } from './individual-lessons/individual-lessons.component';
import { CoachCardComponent } from './coach-card/coach-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookalessonComponent } from './bookalesson/bookalesson.component';
import { TournamentsComponent } from './tournaments/tournaments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IndividualLessonsComponent,
    CoachCardComponent,
    AdminComponent,
    LoginComponent,
    SingupComponent,
    DashboardComponent,
    BookalessonComponent,
    TournamentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
