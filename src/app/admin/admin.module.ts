import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {SideNavComponent} from "./layout/side-nav/side-nav.component";
import {RouterModule} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import { HeaderComponent } from './layout/header/header.component';
import { AdminComponent } from './admin.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AdminLoginComponent} from "./layout/content/admin-login/admin-login.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AdminProductComponent} from "./layout/content/admin-product/admin-product.component";
// import {AdminProductDetailComponent} from "./layout/content/admin-product-detail/admin-product-detail.component";
// import {AdminProductImageComponent} from "./layout/content/admin-product-image/admin-product-image.component";
// import {AdminProductOriginComponent} from "./layout/content/admin-product-origin/admin-product-origin.component";
import {
    AdminConfirmationDialogComponent
} from "./layout/content/reusable/admin-confirmation-dialog/admin-confirmation-dialog.component";
import {
    AdminProductDialogComponent
} from "./layout/content/admin-product/admin-product-dialog/admin-product-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {QuillEditorComponent, QuillViewHTMLComponent} from "ngx-quill";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {StatusConvertPipe} from "./pipe/status-convert.pipe";
import {
    AdminProductImageDialogComponent
} from "./layout/content/admin-product-image/admin-product-image-dialog/admin-product-image-dialog.component";
import {AdminProductImageComponent} from "./layout/content/admin-product-image/admin-product-image.component";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AdminRoutingModule} from "./admin-routing.module";
// import {
//     AdminProductDetailDialogComponent
// } from "./layout/content/admin-product-detail/admin-product-detail-dialog/admin-product-detail-dialog.component";
// import {
//     AdminProductImageDialogComponent
// } from "./layout/content/admin-product-image/admin-product-image-dialog/admin-product-image-dialog.component";
// import {
//     AdminProductOriginDialogComponent
// } from "./layout/content/admin-product-origin/admin-product-origin-dialog/admin-product-origin-dialog.component";



@NgModule({
  declarations: [
      SideNavComponent,
      HeaderComponent,
      AdminComponent,
      AdminLoginComponent,

      AdminProductComponent,
      // AdminProductDetailComponent,
      AdminProductImageComponent,
      // AdminProductOriginComponent,
      AdminConfirmationDialogComponent,
      AdminProductDialogComponent,
      // AdminProductDetailDialogComponent,
      AdminProductImageDialogComponent,
      // AdminProductOriginDialogComponent,

      StatusConvertPipe



  ],
    // Lifecycle hook trong Angular là các phương thức đặc biệt được gọi tại các thời điểm cụ thể
        // trong vòng đời của một component hoặc directive. Chúng cho phép bạn chèn thêm các tác vụ cần thiết
        // trong quá trình khởi tạo, cập nhật và phá hủy component
  imports: [
    AdminRoutingModule,


    CommonModule,
    RouterModule,
    MatListModule,             // sài list trong navigation
    MatIconModule,             // sài icon
    MatExpansionModule,        // đóng mở một panel khi nhấn một đối tượng
    MatToolbarModule,          // container như navigation, nhưng chỉ có tác dụng chứa
    MatMenuModule,             // sử dụng memu lồng menu, có nút nhấn tắt hiện
      MatSidenavModule,        // sử dụng bố cục ngăn kéo trong trang admin
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,

      MatDialogModule,         // mở khung cửa sổ nhỏ
      MatPaginatorModule,      // phân trang
      MatButtonModule,         // button
      MatSelectModule,         // select

      QuillEditorComponent,    // chỉnh input văn bản soạn thảo
      QuillViewHTMLComponent,  // hiển thị kết quả soạn thảo từ QuillEditorComponent

      MatInputModule,          // input
      MatTableModule,          // table

      MatSortModule,           // sort header
      MatProgressSpinnerModule,// xoay spinner

      NgOptimizedImage,        // sai url cho image



  ],
    exports:[
        StatusConvertPipe
    ]
})
export class AdminModule { }
