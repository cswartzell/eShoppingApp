import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../../model/admin';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  //form builder method
  loginRef!: FormGroup;
  msg: string = "";

  constructor(public formBuilder: FormBuilder, public authService: AuthService, public router: Router) { } //DI for FormBuilder
  ngOnInit(): void {
    this.loginRef = this.formBuilder.group({
      emailid: [],
      password: []
    });
  }

  signIn() {
    let admin = this.loginRef.value;
    if (this.authService.signIn(admin)) {
      // alert("logged in")
      sessionStorage.setItem("admin", admin.emailid)
      this.router.navigate(["home"])
    } else {
      // alert("Failed to Log In. Check email and password")
      this.msg = "Invalid email or password"
    }
    this.loginRef.reset();
  }
}
