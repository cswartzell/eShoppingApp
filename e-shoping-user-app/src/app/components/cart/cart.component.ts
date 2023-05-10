import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { Order } from 'src/app/model/Order';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any = [];
  user: any;
  totalPrice: number = 0;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("user")
    if (obj != null) {
      this.user = JSON.parse(obj);
    }
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
    if (this.cart[i].qty > 1) {
      this.cart[i].qty -= 1;
    } else {
      this.cartService.removeDataFromCart(item)
    }
    this.calculateTotal()

  }
  remove(item: any, i: number) {
    // console.log(cart[i].title + " Removed");
    this.cartService.removeDataFromCart(item)
    this.calculateTotal()
  }

  proceedToPayment() {
    let orderDetails = new Order();
    orderDetails.orderDate = new Date();
    orderDetails.orderStatus = "Pending";
    orderDetails.products = this.cart;
    orderDetails.totalItems = this.cart.length;
    orderDetails.shipmentCharges = 15
    orderDetails.totalAmount = this.totalPrice;
    orderDetails.paymentStatus = "Pending";
    orderDetails.paymentMethod = "Freebie"
    orderDetails.userId = this.user.id;
    orderDetails.name = this.user.fullName;
    orderDetails.email = this.user.emailid;
    orderDetails.contact = this.user.contact;

    // console.log(this.cart);
    // console.log(this.totalPrice);
    // console.log(this.user);
    console.log(orderDetails);
  }
}
