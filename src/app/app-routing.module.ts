import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {TeamKPIComponent} from "./manager/team-kpi/team-kpi.component";
import {MemberKPIComponent} from "./manager/member-kpi/member-kpi.component";
import {MemberKpiListComponent} from "./manager/member-kpi/member-kpi-list.component";
import {CoursesListComponent} from "./collaborator/courses-list/courses-list.component";
import {QuizzComponent} from "./collaborator/quizz/quizz.component";
import {quizzGuard} from "./collaborator/quizz-result.guard";
import {CertificateComponent} from "./certificate/certificate.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirects to the login page by default
  { path: 'login', component: LoginComponent },
  {
    path: 'manager/:managerId/kpis',
    children: [
      {
        path: 'team',
        component: TeamKPIComponent
      },
      {
        path: 'members',
        component: MemberKpiListComponent
      }
    ]
  },
  {
    path: 'collaborator',
    component: CoursesListComponent,
    canActivate: [quizzGuard],
  },
  {
    path: 'quizz',
    component: QuizzComponent
  },
  {
    path: 'certificate/:id',
    component: CertificateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
