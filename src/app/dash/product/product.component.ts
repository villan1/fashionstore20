import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  getData;
  resData;
  proData;
  constructor(private proser:ProductService,private router:Router) { }

  ngOnInit() {
    this.getData=this.proser.fetchPro()
    .subscribe(res=>
    {
     this.resData=res;
     if(this.resData.err==0)
     {
       this.proData=this.resData.pdata;
       console.log(res)
     }
    })
  }
  delPro(id)
  {
    this.proser.delPro(id)
    .subscribe(res=>
    {
      this.resData=res;
      if(this.resData.err==0)
      {
        Swal.fire(this.resData.msg);
        setTimeout(()=>
      {
        this.router.navigate(['../dashboard/product'])
      },2000)
      }
    })
  }

}
