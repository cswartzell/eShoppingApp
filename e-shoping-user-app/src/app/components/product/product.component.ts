import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<Product> = []; //why dont we use let here? 
  constructor(public productService: ProductService, public cartService: CartService, public wishlistService: WishlistService) {
    // DI for services
  }
  price_sorted_up: boolean = true
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.loadAllProductDetails().subscribe({
      next: (result: any) => {
        this.products = result
      },
      error: (error: any) => { },
      complete: () => { }
    })
  }

  deleteProduct(pid: any) {
    // console.log(pid);
    let flag = confirm("Delete Product? No Way To Undo");
    if (flag) {
      this.productService.deleteProductById(pid).subscribe({
        next: (result: any) => console.log(result),
        error: (error: any) => console.log(error),
        complete: () => {
          console.log("Product with PID: " + pid + " Deleted")
          this.loadProducts();
        }
      })
    }
  }

  sortByPrice() {
    if (this.price_sorted_up) {
      this.products.sort((p1, p2) => p1.price - p2.price);
    } else {
      this.products.sort((p1, p2) => p2.price - p1.price);
    }
    this.price_sorted_up = !this.price_sorted_up;
  }

  addToCart(product: any) {
    // console.log(product);
    product.qty = 1
    this.cartService.addDataInCart(product);
  }

  addToWishlist(product: any) {
    // console.log(product);
    this.wishlistService.addDataInWishlist(product);
  }

}
