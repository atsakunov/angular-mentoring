import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { LoginComponent } from './components/header/login/login.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GlobalSpinnerComponent } from './components/global-spinner/global-spinner.component';

@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BreadcrumbsComponent,
    IfAuthenticatedDirective,
    LoginPageComponent,
    PageNotFoundComponent,
    GlobalSpinnerComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    MatButtonModule,
    LoginPageComponent,
    IfAuthenticatedDirective,
    GlobalSpinnerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
