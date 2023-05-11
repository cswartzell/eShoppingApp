import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User> = []

  constructor(public userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.loadUserDetails().subscribe({
      next: (data: any) => this.users = data,
      error: (error: any) => console.log(error),
      complete: () => console.log("Got Users")
    })
  }

  addUser(addUser:User){

  }

}
