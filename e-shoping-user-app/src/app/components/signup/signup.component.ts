import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/Address';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
// import { Address } from "../../model/Address";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userRef!: FormGroup;
  msg!: string

  constructor(public router: Router, public formBuilder: FormBuilder, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.userRef = this.formBuilder.group({
      username: [],
      fullName: [],
      address: this.formBuilder.group({
        street: [],
        city: [],
        state: [],
        country: [],
        zipcode: []
      }),
      emailid: [],
      password: [],
      password2: [],
      img: [],
      contact: []
    });
  }

  signUp(): void {
    let user = this.userRef.value;
    this.authService.signup(user).subscribe({
      next: (result: any) => console.log(result),
      error: (error: any) => console.log(error),
      complete: () => {
        console.log("User Added")
        this.userRef.reset();
        this.router.navigate(["home"])
      }
    })
  }
}
