import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { HttpClientModule } from '@angular/common/http';
import { DashComponent } from './dash/dash.component';
import { HeaderComponent } from './index/header/header.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './index/footer/footer.component';
import { HomeComponent } from './index/home/home.component';
import { RegisterComponent } from './index/register/register.component';
import { UloginComponent } from './index/ulogin/ulogin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UloginService } from './service/ulogin.service';
import { DefaultComponent } from './dash/default/default.component';
import { AheaderComponent } from './dash/aheader/aheader.component';
import { AfooterComponent } from './dash/afooter/afooter.component';
import { SidebarComponent } from './dash/sidebar/sidebar.component';
import { AddcatComponent } from './dash/addcat/addcat.component';
import { CatComponent } from './dash/cat/cat.component';
import {AddproductComponent} from './dash/addproduct/addproduct.component';
import { ProductComponent} from './dash/product/product.component';
import { OrderComponent } from './dash/order/order.component';
import { FeedbackComponent } from './dash/feedback/feedback.component';
import { CatserService } from './service/catser.service';
import { CategorylistComponent } from './index/categorylist/categorylist.component';
import { ProductService } from './service/product.service';
import { BannerComponent } from './dash/banner/banner.component';
import { AddbannerComponent } from './dash/addbanner/addbanner.component';

import { BannerService} from './service/banner.service';

import { FbannerComponent } from './index/fbanner/fbanner.component';
import { FproductComponent } from './index/fproduct/fproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    UloginComponent,
    NotFoundComponent,
    DefaultComponent,
    AheaderComponent,
    AfooterComponent,
    SidebarComponent,
    AddcatComponent,
    CatComponent,
    AddproductComponent,

    OrderComponent,
    FeedbackComponent,
    CategorylistComponent,
    BannerComponent,
    AddbannerComponent,

    FbannerComponent,
    FproductComponent,
    ProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, UloginService, CatserService,ProductService,BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
