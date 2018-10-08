import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { AppRoutingModule } from '../../app-routing.module';
import { AdminRoutingModule } from '../admin-routing.module';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UsersComponent } from '../../users/users/users.component';
import { HeroesComponent } from '../../heroes/heroes.component';
import { UserDetailComponent } from '../../users/user-detail/user-detail.component';
import { CreateUserComponent } from '../../users/create-user/create-user.component';
import { HeroDetailComponent } from '../../hero-detail/hero-detail.component';
import { FormsModule, FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ AdminComponent,
        DashboardComponent,
        UsersComponent,
        UserDetailComponent,
        HeroesComponent,
        HeroDetailComponent,
        CreateUserComponent
       ],
      imports: [ AppRoutingModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have H3 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('ADMIN');
    expect(component).toBeTruthy();
  });

  it('should have nav tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav')).not.toBe(null);
  });

  it('should have nav and href tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav')).not.toBe(null);
    expect(compiled.querySelectorAll('a').length).toEqual(2);
  })
});
