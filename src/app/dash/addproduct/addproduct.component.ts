import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CatserService } from 'src/app/service/catser.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
getData;
catData;
  myForm:FormGroup;
  image;
  resData;
  msg;
  constructor(private fb:FormBuilder,private proser:ProductService,private router:Router,private catser:CatserService) { }

  ngOnInit() {
    this.Validate();
    this.getData=this.catser.fetchCat().subscribe(res=>
      {
       this.resData=res;
       if(this.resData.err==0)
       {
         this.catData=this.resData.cdata;
         console.log(this.resData.cdata)
       }
      })
}

Validate()
{
 this.myForm=this.fb.group(
   {
     'category':['',Validators.required],
     'mname':['',Validators.required],
     'price':['',Validators.required],
     'quantity':['',Validators.required],
     'color':['',Validators.required],
     'ram':['',Validators.required],
     'rom':['',Validators.required],
     'os':['',Validators.required],
     'features':['',Validators.required],
   }
 )
}
addImage(event)
{
    if(event.target.files && event.target.files.length>0)
    {
      this.image=event.target.files[0];
    }
}
addPro()
{
  let category=this.myForm.controls.category.value;
  let mname=this.myForm.controls.mname.value;
  let price=this.myForm.controls.price.value;
  let quantity=this.myForm.controls.quantity.value;
  let ram=this.myForm.controls.ram.value;
  let rom=this.myForm.controls.rom.value;
  let os=this.myForm.controls.os.value;
  let color=this.myForm.controls.color.value;
  let features=this.myForm.controls.features.value;
  let formData=new FormData();
  formData.append('cname',category);
  formData.append('mname',mname);
  formData.append('Image',this.image);
  formData.append('quantity',quantity);
  formData.append('ram',ram);
  formData.append('rom',rom);
  formData.append('os',os);
  formData.append('features',features);
  formData.append('color',color);
  formData.append('price',price);
  this.proser.addPro(formData)
  .subscribe(res=>
  {
    this.resData=res;
    if(this.resData.err==0)
    {
      Swal.fire('Product Added');
      setTimeout(()=>
    {
      this.router.navigate(['/dashboard/product'])
    },2000);
    }
    else
    {
      this.msg=this.resData.msg;
    }

  })
}

}
