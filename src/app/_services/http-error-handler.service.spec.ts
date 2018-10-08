import { TestBed } from '@angular/core/testing';

import { HttpErrorHandler } from './http-error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

describe('HttpErrorHandlerService', () => {
  beforeEach(
    () => {
      TestBed.configureTestingModule({
        providers: [
          HttpErrorHandler,
        ],
      })
    }
  );

  it('should be created', () => {
    const service: HttpErrorHandler = TestBed.get(HttpErrorHandler);
    expect(service).toBeTruthy();
  });
});
