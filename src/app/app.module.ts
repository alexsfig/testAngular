import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users/users.component';
import { AdminModule } from './admin/admin.module';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpErrorHandler } from'./_services/http-error-handler.service';
import { LoginComponent } from './auth/login/login.component';

import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';

import { AuthModule } from './auth/auth.module';
import { CreateUserComponent } from './users/create-user/create-user.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    UsersComponent,
    UserDetailComponent,
    CreateUserComponent,
  ],
  imports: [
    ReactiveFormsModule,
    AuthModule,
    BrowserModule,
    FormsModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpErrorHandler,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private http: HttpClientModule) { }
}
