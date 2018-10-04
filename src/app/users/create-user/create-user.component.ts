import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from '../../_services/users.service'
import { User } from '../../_entity/user'

import { FormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user = new User(
    0,
    '',
    '',
    '',
    '',
    '',

  );

  userForm: FormGroup;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private location: Location,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.validator()
  }

  get username() { return this.userForm.get('username'); }
  get firstName() { return this.userForm.get('firstName'); }
  get lastName() { return this.userForm.get('lastName'); }

  get f() { return this.userForm.controls; }

  create(): void {
    this.user = {...this.userForm.value}
    console.log(this.user)

    this.usersService.createUser(this.user)
      .subscribe(user => {
        this.user = user;
        console.log(user)
        this.router.navigateByUrl(`/users/${user.id}`);
      });
  }

  validator(): void {
    this.userForm = new FormGroup({
      username: new FormControl(
        this.user.username, [
          Validators.required,
          Validators.minLength(4)
        ]
      ),
      firstName: new FormControl(
        this.user.firstName, [
          Validators.required,
          Validators.minLength(4)
        ]
      ),
      lastName: new FormControl(
        this.user.lastName, [
          Validators.required,
          Validators.minLength(4)
        ]
      ),
      password: new FormControl(
        this.user.password, [
          Validators.required,
          Validators.minLength(4)
        ]
      )
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    this.create()
  }

  goBack(): void {
    this.location.back();
  }

}
