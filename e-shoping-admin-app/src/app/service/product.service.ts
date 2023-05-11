import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../model/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL: string = "http://localhost:3000/products"

  constructor(public httpClient: HttpClient) { }  //DI

  loadAllProductDetails(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseURL);
  }

  deleteProductById(pid:any):Observable<any> {
   return this.httpClient.delete(this.baseURL+"/"+pid)
  }

  storeProduct(product:Product):Observable<any>{
    return this.httpClient.post(this.baseURL, product)
  }

}
