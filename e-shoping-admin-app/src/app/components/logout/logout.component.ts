import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public router: Router, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.logout();
    // sessionStorage.removeItem("admin")
    this.router.navigate(["/"])
  }
}