import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { Address } from "../../model/Address";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userRef!: FormGroup;
  msg!:string

  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.userRef = this.formBuilder.group({
      username: [],
      fullname: [],
      address: this.formBuilder.group({
        street: [],
        city: [],
        state: [],
        country: [],
        pincode: []
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
    console.log(user);
  }
}
