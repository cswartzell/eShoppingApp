import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
    let user = this.loginRef.value;
    this.authService.signIn().subscribe({
      next: (data: any) => {
        let result = data.find((u: any) => u.emailid == user.emailid && u.password == user.password)
        if (result != undefined) {
          // alert("logged in")
          sessionStorage.setItem("user", JSON.stringify(result));
          this.router.navigate(["home"]);
        } else {
          // alert("Failed to Log In. Check email and password")
          this.msg = "Invalid email or password"
        }

      },
      error: (error: any) => {

      },
      complete: () => {

      }
    })

    this.loginRef.reset();

  }
}
