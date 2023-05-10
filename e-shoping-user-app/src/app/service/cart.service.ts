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
        let result = data.find((c: any) => c.title == product.title)
        //if new item to cart:
        if (result == undefined) {
          data.push(product);
          //I DO NOT understand this call
          this.cartData.next(data);
          console.log(product.title + " added to cart");

        }
        // else {
        //   result.qty += 1;
        //   console.log(product.title + " quantity updated");
        // }
        // Need to actually make sure there is enough stock to add qty actually

      },
      error: (error: any) => { },
      complete: () => { }
    })
  }

  removeDataFromCart(product: any) {
    console.log("delete " + product + " from cart");

  }



}
