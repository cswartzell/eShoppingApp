import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

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

  constructor(public httpClient:HttpClient) { }

  signIn(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:3000/users");
    // return (login.emailid == "admin@gmail.com" && login.password == "123");



  }
}
