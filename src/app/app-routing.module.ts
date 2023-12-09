import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndividualLessonsComponent } from './individual-lessons/individual-lessons.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { BookalessonComponent } from './bookalesson/bookalesson.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'individual-lessons',component:IndividualLessonsComponent},
  {path:'admin',component:AdminComponent},
  {path:'login',component: LoginComponent},
  {path:'signup',component:SingupComponent},
  { path: 'bookalesson/:coachName', component: BookalessonComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: '**', redirectTo: '/home' },
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
