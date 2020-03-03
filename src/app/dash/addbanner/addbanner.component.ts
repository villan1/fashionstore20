import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BannerService } from 'src/app/service/banner.service';


@Component({
  selector: 'app-addbanner',
  templateUrl: './addbanner.component.html',
  styleUrls: ['./addbanner.component.css']
})
export class AddbannerComponent implements OnInit {

  myForm:FormGroup;
  image;
  resData;
  msg;
  constructor(private fb:FormBuilder,private router:Router,private banser: BannerService) { }

  ngOnInit() {
  }

  addImage(event)
  {
      if(event.target.files && event.target.files.length>0)
      {
        this.image=event.target.files[0];
        console.log(this.image);
      }
  }
  addbanner()
  {
    // let desc=this.myForm.controls.description.value;
    let formData=new FormData();
    // formData.append('descp',desc);
    formData.append('Image',this.image);
    this.banser.addbanner(formData)
    .subscribe(res=>
    {
      this.resData=res;
      if(this.resData.err==0)
      {
        Swal.fire('Banner Added');
        setTimeout(()=>
      {
        this.router.navigate(['/dashboard/banner'])
      },2000)
      }
      else
      {
        this.msg=this.resData.msg;
      }

    })

  }

}

