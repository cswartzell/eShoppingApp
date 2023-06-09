import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AuthGuard } from './service/auth.guard';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { UserComponent } from './components/user/user.component';
import { OrderComponent } from './components/order/order.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';


//Here we write navigation rules:
//http://localhost:4200/aboutus
const routes: Routes = [
  { path: "aboutus", component: AboutusComponent },
  { path: "contactus", component: ContactusComponent },
  { path: "login", component: SigninComponent },
  { path: "signup", component: SignupComponent },

  {
    path: "home", component: DashboardComponent, canActivate: [AuthGuard], children: [
      { path: "product", component: ProductComponent },
      { path: "category", component: CategoryComponent },
      { path: "user", component: UserComponent },
      { path: "order", component: OrderComponent },
      { path: "cart", component: CartComponent },
      { path: "logout", component: LogoutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
