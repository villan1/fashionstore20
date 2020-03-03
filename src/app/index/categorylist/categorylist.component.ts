import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {

  getData;
  resData;
  proData;
  ProductAddedToCart;
  alerts;
  cartItemCount;
  constructor(private proser:ProductService,private router:Router) { }

  ngOnInit() {
    this.getData=this.proser.fetchPro()
    .subscribe(res=>
    {
     this.resData=res;
     if(this.resData.err==0)
     {
       this.proData=this.resData.pdata;
     }
    })
  }
  OnAddCart(product){
    console.log(product)
    this.ProductAddedToCart=this.proser.getProductFromCart();
    if(this.ProductAddedToCart==null){
      this.ProductAddedToCart=[];
      this.ProductAddedToCart.push(product);
      this.proser.addProductToCart(this.ProductAddedToCart);
      Swal.fire('Added');
      setTimeout(()=>{
        console.log(this.alerts);
      },3000);
    }
    else{
      let tempProduct=this.ProductAddedToCart.find(c=>c.id==product._id);
      if(tempProduct==null)
      {
        this.ProductAddedToCart.push(product);
        this.proser.addProductToCart(this.ProductAddedToCart);
        Swal.fire('Added');

      }else{
       Swal.fire('Item already exists');

      }
    }
  }


}

