import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesModule } from './courses/courses.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },

  {
    path: 'courses',
    loadChildren: () => CoursesModule,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
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
