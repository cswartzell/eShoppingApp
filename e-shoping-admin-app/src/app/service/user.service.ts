import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl: string = "http://localhost:3000/users";
  constructor(public httpClient: HttpClient) { }

  loadUserDetails(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl);
  }

}
