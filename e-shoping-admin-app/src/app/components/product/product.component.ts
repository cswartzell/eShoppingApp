import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<Product> = []; //why dont we use let here? 
  productForm!: FormGroup
  categories: Array<Category> = [];
  constructor(public productService: ProductService, public formBuilder: FormBuilder, public modal: NgbModal, public categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.loadProducts();
    this.productForm = this.formBuilder.group({
      title: [""],
      description: [""],
      price: [""],
      discountPercentage: [""],
      rating: [""],
      stock: [""],
      brand: [""],
      category: [""],
      thumbnail: [""],
      // qty:[""]
    });
    this.categoryService.loadCategory().subscribe({
      next: (data: any) => {
        this.categories=data;
      },
      error: (error: any) => console.log(error),
      complete: () => console.log("Categories Loaded")
    });
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
    this.products.sort((p1, p2) => p1.price - p2.price);
  }

  addProductDetails(addProduct: any) {
    this.modal.open(addProduct, { size: "lg" });
  }

  storeProduct() {
    let product = this.productForm.value;
    console.log(product);

  }

}
