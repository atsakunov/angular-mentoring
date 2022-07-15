import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesModule } from './courses/courses.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },

  {
    path: 'courses',
    loadChildren: () => CoursesModule
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
