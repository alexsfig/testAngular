import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponent } from './create-user.component';
import { HeroesComponent } from '../../heroes/heroes.component';
import { HeroDetailComponent } from '../../hero-detail/hero-detail.component';
import { User } from '../../_entity/user'
import { AdminComponent } from '../../admin/admin/admin.component';
import { LoginComponent } from '../../auth/login/login.component';
import { AppRoutingModule } from '../../app-routing.module';
import { AdminRoutingModule } from '../../admin/admin-routing.module';
import { UsersComponent } from '../../users/users/users.component';
import { UserDetailComponent } from '../../users/user-detail/user-detail.component';
import { FormsModule, FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from '../../_services/http-error-handler.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

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
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
