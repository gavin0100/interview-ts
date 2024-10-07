import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes:Routes = [
  {path: '', children:[
      {path:'', loadChildren: () => import('./page/page-routing.module').then(p=> p.PageRoutingModule) },
      {path:'admin', loadChildren: () => import('./admin/admin-routing.module').then(p=> p.AdminRoutingModule) },
    ]},
  {path:'**', redirectTo:'', pathMatch:'full'},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
