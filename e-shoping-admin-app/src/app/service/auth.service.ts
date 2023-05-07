import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //this is an observable, a "subject" that returns a bool
  private loggedIn = new BehaviorSubject<boolean>(false);

  public get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  logout() {
    this.loggedIn.next(false);
  }

  login() {
    this.loggedIn.next(true);
  }

  constructor() { }

  signIn(login: Admin): boolean {
    return (login.emailid == "admin@gmail.com" && login.password == "123");
  }
}
