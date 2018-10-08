import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from '../../_entity/user'
import { AdminComponent } from '../../admin/admin/admin.component';
import { LoginComponent } from './login.component';
import { AppRoutingModule } from '../../app-routing.module';
import { AdminRoutingModule } from '../../admin/admin-routing.module';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UsersComponent } from '../../users/users/users.component';
import { HeroesComponent } from '../../heroes/heroes.component';
import { UserDetailComponent } from '../../users/user-detail/user-detail.component';
import { CreateUserComponent } from '../../users/create-user/create-user.component';
import { HeroDetailComponent } from '../../hero-detail/hero-detail.component';
import { FormsModule, FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from '../../_services/http-error-handler.service';

import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminComponent,
        LoginComponent,
        DashboardComponent,
        UsersComponent,
        UserDetailComponent,
        HeroesComponent,
        HeroDetailComponent,
        CreateUserComponent
      ],
      imports: [
        AppRoutingModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        HttpErrorHandler,
        { provide: APP_BASE_HREF, useValue: '/' },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h2 with title "Login" and two input', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toBe('Login');
    expect(compiled.querySelectorAll('input').length).toEqual(2);
  })

  describe('Form Validation', () => {
    it('return error if input are empty', () => {
      fixture.detectChanges();
      let errors = {};
      let username = component.loginForm.controls['username'];
      errors = username.errors || {};
      expect(errors['required']).toBeTruthy();
      let password = component.loginForm.controls['password'];
      errors = password.errors || {};
      expect(errors['required']).toBeTruthy();
    })

    it('Success if input has a correct value', () => {
      let user: User;
      const compiled = fixture.debugElement.nativeElement;
      fixture.detectChanges();
      let errors = {};
      let username = component.loginForm.controls['username']['alexsfig'];
      expect(username).toEqual(undefined)
      let password = component.loginForm.controls['password']['alex220488.-'];
      expect(password).toEqual(undefined)
      component.onSubmit();
    })

  })

});
