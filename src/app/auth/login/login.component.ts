import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import {User} from '../../_entity/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  user = {
    username: '',
    password: ''
  };

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { this.setMessage(); }

  ngOnInit(): void {
    this.validator()

    // reset login status
    // this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  validator(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(
        this.user.username, [
          Validators.required,
        ]
      ),
      password: new FormControl(
        this.user.password, [
          Validators.required,
        ]
      )
    });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }


  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.loading = false;
        });
  }


  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
