import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from './http-error-handler.service';

describe('UsersService', () => {
  beforeEach(
    () => {
      TestBed.configureTestingModule({
        providers: [
          HttpErrorHandler,
        ],
        imports: [HttpClientModule, HttpClientTestingModule]
      })
    }
  );

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});
