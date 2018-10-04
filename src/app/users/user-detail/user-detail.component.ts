import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from '../../_services/users.service'
import { User } from '../../_entity/user'

import { FormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  userForm: FormGroup;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private location: Location,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.findOne();
  }

  get username() { return this.userForm.get('username'); }
  get firstName() { return this.userForm.get('firstName'); }
  get lastName() { return this.userForm.get('lastName'); }

  get f() { return this.userForm.controls; }

  findOne(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.findOne(id)
      .subscribe(user => {
        this.user = user;
        this.validator()
      });
  }

  updateUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.user = {...this.userForm.value}
    console.log(this.user)
    this.usersService.update(id, this.user)
      .subscribe();
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
      )
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.updateUser()

  }

  goBack(): void {
    this.location.back();
  }

}
