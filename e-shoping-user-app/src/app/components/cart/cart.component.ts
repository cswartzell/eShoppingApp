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
  totalPrice: number = 0;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart.subscribe({
      next: (data: any) => {
        this.cart = data;
        this.calculateTotal();
      },
      error: (error: any) => { },
      complete: () => { }

    })
  }

  calculateTotal(): void {
    this.totalPrice = this.cart.reduce((prev: any, curr: any) => prev + curr.qty * curr.price, 0)
  }

  // Currently, items are added to the cart via the PRDOCUCT component... weird
  // addToCart(product: any) {}

  removeDataFromCart(item: any) {
    this.cartService.removeDataFromCart(item)
  }

  increment(item: any, i: number) {
    // console.log(item[i].title + " qty: " + (item[i].qty+1));
    this.cart[i].qty = eval(item.qty) + 1;
    this.calculateTotal()
  }
  decrement(item: any, i: number) {
    // console.log(item[i].title + " qty: " + (item[i].qty-1));
    if (this.cart[i].qty > 0) {
      this.cart[i].qty -= 1;
    }
    this.calculateTotal()

  }
  remove(cart: any, i: number) {
    console.log(cart[i].title + " Removed");

  }
}
