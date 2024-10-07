import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PageComponent} from "./page.component";
import {HomeComponent} from "./layout/content/home/home.component";
import {ContactComponent} from "./layout/content/contact/contact.component";
import {LoginComponent} from "./layout/content/login/login.component";
import {CartComponent} from "./layout/content/cart/cart.component";
import {CheckoutComponent} from "./layout/content/checkout/checkout.component";

const routes: Routes = [
  {path:'', component:PageComponent ,children:[
      {path:'home', component:HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path:'contact', component:ContactComponent},
      {path:'login', component: LoginComponent},
      {path:'cart', component: CartComponent},
      {path:'checkout', component:CheckoutComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
