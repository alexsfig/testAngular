import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from '../_services/http-error-handler.service';
describe('AuthGuard', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        HttpErrorHandler,
        { provide: Router, useValue: routerSpy }
      ],
      imports:[HttpClientModule ],
    });
  });

  it('Redirect if currentUser is not set on localStorage', inject([Router], (router: Router) => {
    localStorage.removeItem('currentUser')
    let authGuard: AuthGuard = TestBed.get(AuthGuard);
    authGuard.checkLogin('users/1')
    let spy = router.navigateByUrl as jasmine.Spy;
    let navArgs = spy.calls.first().args[0];
    expect(navArgs).toBe('/login')
  }));

  it('If currentUser is set on localStorage return true', inject([Router], (router: Router) => {
    let authGuard: AuthGuard = TestBed.get(AuthGuard);
    localStorage.setItem('currentUser', 'lorem ipsum');
    expect(authGuard.checkLogin('users/1')).toBe(true)
  }));

});
