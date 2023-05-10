import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../model/cart';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // private cartData :BehaviorSubject<Cart>;
  private cartData = new BehaviorSubject<Cart[]>([]);

  constructor() { }

  get getCart() {
    return this.cartData.asObservable();
  }

  addDataInCart(product: Product) {
    this.getCart.subscribe({
      next: (data: any) => {
        // Find if this item is already in the cart
        let result = data.findIndex((c: any) => c.title == product.title)
        console.log(result);

        //if new item to cart:
        if (result == -1) {
          product.qty = 1;
          data.push(product);
          //I DO NOT understand this call
          // this.cartData.next(data);
          console.log(product.title + " added to cart");
        } else {
          //Why doesnt this fully work?
          data[result].qty = data[result].qty + 1;
        }
      },
      error: (error: any) => { },
      complete: () => { }
    })
  }

  removeDataFromCart(product: any) {
    // console.log("delete " + product + " from cart");
    this.getCart.subscribe({
      next: (data: any) => {
        // Find if this item is already in the cart
        let index = data.findIndex((c: any) => c.title == product.title)
        //if new item to cart:
        if (index >= 0) {
          data.splice(index, 1);
          //I DO NOT understand this call
          // this.cartData.next(data);
          console.log(product.title + " removed to cart");
        }
      },
      error: (error: any) => { },
      complete: () => { }
    })
  }



}
