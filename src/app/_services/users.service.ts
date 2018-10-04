import { Injectable } from '@angular/core';
import { User } from '../_entity/user'
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  users: User[];
  private handleError: HandleError;
  private httpErrorResponse: HttpErrorResponse;

  signIn(username: string, password: string) {
    let user = {
       'username': username,
       'password': password
    }
    this.messageService.add('UserService: login users');
    return this.http.post('http://localhost:3003/auth/token', user)
  }

  all(): Observable<User[]> {
    this.messageService.add('UserService: fetched users');
    return this.http.get<User[]>('http://localhost:3003/api/v1/users')
  }

  findOne(id: number): Observable<User> {
    this.messageService.add(`UserService: fetched user id=${id}`);
    return this.http.get<User>(`http://localhost:3003/api/v1/users/${id}`)
    .pipe(
      catchError(this.handleError<any>('getUseres', `getUser id=${id}`))
    );
  }

  update(id: number, user: User): Observable<User> {
    this.messageService.add(`UserService: update user id=${id}`);
    return this.http.put<User>(`http://localhost:3003/api/v1/users/${id}`, user)
  }

  createUser(user: User): Observable<User> {
    this.messageService.add(`UserService: create user`);
    return this.http.post<User>('http://localhost:3003/api/v1/users/', user).pipe(
      catchError(this.handleError<any>('create User', ''))
    );
  }

  delete(id: number): Observable<User> {
    this.messageService.add(`UserService: delete user id=${id}`);
    return this.http.delete<User>(`http://localhost:3003/api/v1/users/${id}`).pipe(
      catchError(this.handleError<any>('delete User', ''))
    );
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('userService')
 }

}
