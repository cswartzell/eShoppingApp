import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Wishlist } from '../model/Wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  // private cartData :BehaviorSubject<Cart>;
  private wishlistData = new BehaviorSubject<Wishlist[]>([]);

  constructor() { }

  getCart() {
    return this.wishlistData.asObservable();
  }

  addDataInWishlist(product: any) {

  }

  removeDataFromWishlist(product: any) {

  }
}
