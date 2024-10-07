import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {adminLoginGuard} from "../guards/admin-login.guard";
import {AdminComponent} from "./admin.component";
import {AdminProductComponent} from "./layout/content/admin-product/admin-product.component";
import {AdminLoginComponent} from "./layout/content/admin-login/admin-login.component";
import {authGuard} from "../guards/auth.guard";
import {AdminProductImageComponent} from "./layout/content/admin-product-image/admin-product-image.component";

const routes: Routes = [
  {path:'', component:AdminComponent ,children:[
      // canActive: bật trạng thái bảo vệ các route dựa trên trạng thái đăng nhập và vai trò của người dùng
          // việc trả về false trong guards là không cho truy cập route hiện tại
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path:'login', component: AdminLoginComponent, canActivate: [adminLoginGuard]},
      {path:'product', component: AdminProductComponent,  canActivate:[authGuard]},
      {path:'product-image', component: AdminProductImageComponent,  canActivate:[authGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
