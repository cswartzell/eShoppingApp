import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Array<Cart> = [];

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart.subscribe({
      next: (data: any) => {
        this.cart = data;

      },
      error: (error: any) => { },
      complete: () => { }

    })
  }
  removeDataFromCart(item: any) {
    this.cartService.removeDataFromCart(item)
  }

  increment(cart:any, i:number) {
    console.log(cart[i].title + " qty: " + (cart[i].qty+1));
    
    // cart[i].qty += 1;
  }
  decrement(cart:any, i:number) {
    console.log(cart[i].title + " qty: " + (cart[i].qty-1));
    // if (cart[i].qty >= 0){
    //   cart[i].qty -= 1;
    // }
  }
  remove(cart:any, i:number) {
    console.log(cart[i].title + " Removed");

  }
}
