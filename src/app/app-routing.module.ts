import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './index/home/home.component';
import { RegisterComponent } from './index/register/register.component';
import { UloginComponent } from './index/ulogin/ulogin.component';
import { DefaultComponent } from './dash/default/default.component';
import { AddcatComponent } from './dash/addcat/addcat.component';
import { CatComponent } from './dash/cat/cat.component';


import { OrderComponent } from './dash/order/order.component';
import { FeedbackComponent } from './dash/feedback/feedback.component';
import {CategorylistComponent} from './index/categorylist/categorylist.component';
import {AddproductComponent} from './dash/addproduct/addproduct.component';
import {BannerComponent} from './dash/banner/banner.component';
import {AddbannerComponent} from './dash/addbanner/addbanner.component';
import { ProductComponent } from './dash/product/product.component';
import { FbannerComponent } from './index/fbanner/fbanner.component';
import { FproductComponent } from './index/fproduct/fproduct.component';

const routes: Routes = [
  { path:'', component:IndexComponent,
  children:[
    { path:'', redirectTo:'home', pathMatch:'full'},
    { path:'home', component:HomeComponent},
    {path:'fbanner',component:FbannerComponent},
    {path:'fproduct',component:FproductComponent},
    { path:'categorylist', component:CategorylistComponent},

    { path:'register', component:RegisterComponent},
    { path:'ulogin', component:UloginComponent},
  ]},
  { path:'login',component:LoginComponent},
  { path:'admin', component:DashComponent,
  children:[
    { path:'', redirectTo:'default', pathMatch:'full'},
    { path:'default', component:DefaultComponent},
    { path:'addcat', component:AddcatComponent},
    { path: 'banner', component:BannerComponent},
    { path: 'addbanner', component:AddbannerComponent},
    { path:'cat', component:CatComponent},
    {path:'product',component:ProductComponent},
    {path:'addproduct',component:AddproductComponent},

    { path:'order', component:OrderComponent},
    { path:'feedback', component:FeedbackComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
