import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { UserComponent } from './components/user/user.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LandingComponent,
    AboutusComponent,
    ContactusComponent,
    DashboardComponent,
    LogoutComponent,
    ProductComponent,
    CategoryComponent,
    UserComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
