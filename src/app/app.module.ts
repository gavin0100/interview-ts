import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Test_componentComponent } from './test_component/test_component.component';
import {RouterModule} from "@angular/router";
import {PageModule} from "./page/page.module";
import {PageRoutingModule} from "./page/page-routing.module";
import {AppRoutingModule} from "./app-routing.module";
import {environment} from "../environments/environment";
import * as firebase from '@firebase/app';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth.interceptor";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AdminModule} from "./admin/admin.module";
import {MY_DATE_FORMAT} from "./shared/utils/config";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MomentUtcDateAdapter} from "./shared/utils/date-format";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {getStorage, provideStorage} from "@angular/fire/storage";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {QuillModule} from "ngx-quill";
import {getAuth, provideAuth} from "@angular/fire/auth";

firebase.initializeApp(environment.firebaseConfig)
@NgModule({
  declarations: [
    AppComponent,
    Test_componentComponent
  ],
  imports: [
    AppRoutingModule,
    PageModule,
    AdminModule,

    BrowserModule,
    RouterModule,
    HttpClientModule,
    QuillModule,

    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),     // thiết lập môi trường và thông tin xác thực
    provideAuth(() => getAuth()),          // xác thực khi đăng nhập với firebase
    provideStorage(() => getStorage()),    // lưu và truy xuất file ảnh
    provideFirestore(() => getFirestore()),// lưu và đồng bồ dữ liệu với cơ sở dữ liệu Nosql của Firebase

    // BrowserAnimationsModule

  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: MatDialogRef,       // cung cấp các phương thức để đóng dialog và truyền dữ liệu trở lại component gọi.
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,    // cung cấp dữ liệu từ component gọi vào dialog.
      useValue: {}
    },
    {
      provide: DateAdapter,
      useClass: MomentUtcDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_DATE_FORMAT
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en-GB'
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,     // các field trong form tự động điều chỉnh kích thước để fit với ndung
      useValue: { subscriptSizing: 'dynamic' }
    },
  ],
  bootstrap: [Test_componentComponent]
})
export class AppModule { }
