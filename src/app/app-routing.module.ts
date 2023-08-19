import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EducationComponent } from './pages/education/education.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FenixComponent } from './pages/fenix/fenix.component';
import { RCSComponent } from './pages/rcs/rcs.component';

const routes: Routes = [
 {path: '', redirectTo: 'home', pathMatch: 'full'},
 {path: 'home', component: HomeComponent},
 {path: 'education', component: EducationComponent},
 {path: 'projects', component: ProjectsComponent},
 {path: 'skills', component: SkillsComponent},
 {path: 'fenix', component:FenixComponent},
 {path: 'rcs', component: RCSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
