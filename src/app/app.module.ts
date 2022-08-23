import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptor } from './core/services/auth.interceptor';
import { LoadingInterceptor } from './core/services/loading.interceptor';
import { environment } from '../environments/environment';
import { authReducer } from './core/store/reducers/auth.reducer';
import { coursesReducer } from './core/store/reducers/courses.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot({ auth: authReducer, courses: coursesReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
