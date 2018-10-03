import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../_services/users.service'
import { User } from '../_entity/user'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  error = ''
  users: User[];

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.allUsers();
  }

  delete(id): void {
    this.usersService.delete(id)
      .subscribe(
        customers => {
          if(customers)// success path
          this.users = this.users.filter(user => user.id != id);
          console.log(customers);
        },
        error => { // error path
          this.error = error
          console.log(error)
        });
  }
  allUsers(): void {
    this.usersService.all()
      .subscribe((data) => {
        this.users = data
        console.log(data)
      })
  }
}
