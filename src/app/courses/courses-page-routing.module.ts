import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';

const routes: Routes = [
  {
    path: '', component: CoursesPageComponent,
  },
  {
    path: 'new', component: AddCourseComponent
  },
  {
    path: 'new/:id', component: UpdateCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule { }
