import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private _http:HttpClient) { }
  url="http://localhost:8899/api/";
   addPro(data)
   {
  return this._http.post(this.url+"addpro",data)
   }
   fetchPro()
   {
     return this._http.get(this.url+'fetchpro');
   }
   fetchmob()
   {
     return this._http.get(this.url+'fetchmob');
   }
   delPro(id)
   {
    return this._http.get(this.url+'delpro/'+id);
   }
   cartdata(id)
   {
       return this._http.get(this.url+'getpro/'+id);

   }
   getProductFromCart(){
     return JSON.parse(localStorage.getItem('product'));
   }
   addProductToCart(product: any){
      localStorage.setItem("product", JSON.stringify(product));
  }
  deletecart(id){
    localStorage.removeItem("product._id");
  }
}
