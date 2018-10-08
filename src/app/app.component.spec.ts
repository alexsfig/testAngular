import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
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
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MessagesComponent,
        MessagesComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        UsersComponent,
        UserDetailComponent,
        CreateUserComponent
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
        {provide: APP_BASE_HREF, useValue: '/'},
        HttpErrorHandler,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const fixture2 = TestBed.createComponent(MessagesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'angular-app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('angular-app');
  }));
});
