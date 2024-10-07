import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageComponent} from "./page.component";
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./layout/content/home/home.component";
import {PageRoutingModule} from "./page-routing.module";
import {AuthInterceptor} from "../auth.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatBadgeModule} from "@angular/material/badge";
import { CurrencyVNDPipe } from './pipe/currency-VND.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {DropdownHoverDirective} from "./dropdown-hover.directive";
import { ContactComponent } from './layout/content/contact/contact.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SpaceToDashPipe} from "./pipe/space-to-dash.pipe";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { register } from 'swiper/element/bundle'; // su dung slide dang ngang de trinh chieu san pham
import {LoginComponent} from "./layout/content/login/login.component";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CartComponent} from "./layout/content/cart/cart.component";
import {ConvertUnitPipe} from "./pipe/convert-unit.pipe";
import {MatDialogModule} from "@angular/material/dialog";
import {
  UserConfirmationDialogComponent
} from "./layout/content/reusable/user-confirmation-dialog/user-confirmation-dialog.component";
import {CheckoutComponent} from "./layout/content/checkout/checkout.component";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatListModule} from "@angular/material/list";

register();
@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    UserConfirmationDialogComponent,
    CheckoutComponent,


    CurrencyVNDPipe,
    DropdownHoverDirective,
    ContactComponent,
    SpaceToDashPipe,
    ConvertUnitPipe
  ],
  imports: [
    CommonModule,       // có sẵn, cung cấp những chức năng chính của angular cho component
                          // Bao gồm các directive như NgIf, NgForOf, NgSwitch, NgClass, NgStyle
                          // Bao gồm các pipe như DecimalPipe, DatePipe, CurrencyPipe

    RouterModule,       // sài router-outlet, routerLink thẻ a trong html
    MatButtonModule,    // sài mat-button trong thẻ button
    MatMenuModule,      // sài [matMenuTriggerFor]="menu" để mở menu khi nhấn một gì đó
    MatSnackBarModule,  // hiện thanh thông báo (ví dụ thêm giỏi hàng thành công, đăng nhập thành công)
    MatIconModule,      // sài icon bằng <mat-icon>local_shipping</mat-icon>
    MatDividerModule,   // kẻ đường phân chia trong mat-list (danh sách)
    MatBadgeModule,     // sài huy hiệu, mấy cái thông báo hình tròn như số sản phẩm trong giỏ hàng
    ReactiveFormsModule,// quản lý form từ dưới typescript lên template như FormControl, FormGroup, và FormArray
    MatAutocompleteModule,    // sài list down cho input, chọn giá trị hoặc tự động tìm kiếm dựa trên input
    BrowserAnimationsModule,  // sử dụng module này thì mới bật tắt được mat-menu thông qua mat-button
                                // cần phải có để hỗ trợ chuyển động 1 element khi phụ thuộc vào 1 element khác
    MatProgressSpinnerModule, // vòng xoay xoay chờ loading
    MatFormFieldModule,       // tạo trường form theo định dạng angular
    MatInputModule,           // tạo input trong form theo định dạng angular, sét 1 input là độc lập
                              // cả 2 trường này đều xử lý các lable, error lable trong form
                              // thực hiện valid bằng validator
    FormsModule,              // quản lý form từ tên template xuống typescript như ngModel, ngModelGroup, và ngForm
    MatDialogModule,          // thực hiện mở, đóng một cửa sổ nhỏ
    MatStepperModule,         // thực hiện slide theo page
      MatSelectModule,        // chọn 1 từ danh sách sổ xuống
      MatRadioModule,         // sử dụng radio button
      MatListModule,          // sử dụng để liệt kê object như danh sách thông tin


    PageRoutingModule,


  ],
  exports: [
    CurrencyVNDPipe,    // 1 pipe để xử lý dữ liệu trên html
    ConvertUnitPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageModule { }
