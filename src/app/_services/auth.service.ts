import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsersService } from '../_services/users.service';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay } from 'rxjs/operators';
import { User } from '../_entity/user'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private usersService: UsersService,
    private http: HttpClient,
    private router: Router

  ) { }
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(username: string, password: string) {
    return this.http.post<User>('http://localhost:3003/auth/token', { username: username, password: password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.accessToken) {
          console.log(user)
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // this.router.navigate(['/login']);

    this.router.navigateByUrl('/login');


    return false;
  }
}
