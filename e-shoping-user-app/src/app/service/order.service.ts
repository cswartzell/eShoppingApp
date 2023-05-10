import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public baseUrl: string = "http://localhost:3000/orders"
  constructor(public httpClient: HttpClient) { }

  orderPlaced(order: Order): Observable<any> {
    return this.httpClient.post(this.baseUrl, order);
  }
}
