import { TestBed, fakeAsync, tick, async, flush } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpErrorHandler } from '../_services/http-error-handler.service';
import { first, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('AuthService', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  let service: AuthService;
  let httpMock: HttpTestingController;
  beforeEach(
    () => {
      TestBed.configureTestingModule({
        providers: [
          AuthService,
          HttpErrorHandler,
          { provide: Router, useValue: routerSpy }
        ],
        imports: [HttpClientModule, HttpClientTestingModule]
      });
      httpMock = TestBed.get(HttpTestingController)
      service = TestBed.get(AuthService);
    }
  );

  it('success login', () => {
    service.login('alexsfig', 'alex220488.-')
      .subscribe(
        data => {
          expect(data.username).toEqual('alexssdsdfig');
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.loading = false;
        });
    console.log(localStorage);
    const req = httpMock.expectOne(`http://localhost:3003/auth/token`);
    expect(req.request.method).toBe("POST");
    expect(req.request.responseType).toBe("json");
    let expected = { username: 'alexsfig', password: 'alex220488.-' }
    expect(req.request.body).toEqual(expected)
    //req.flush(dummyUsers);
    // httpMock.verify()
  });

});
