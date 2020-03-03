import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/service/banner.service';

@Component({
  selector: 'app-fbanner',
  templateUrl: './fbanner.component.html',
  styleUrls: ['./fbanner.component.css']
})
export class FbannerComponent implements OnInit {
  getbanner;
  resData;
  bannerdata;
  data;

    constructor(private banser: BannerService) { }

    ngOnInit() {
      this.getbanner=this.banser.fetchbanner().subscribe(res=>{
        this.resData=res;
        if(this.resData.err==0){
          this.bannerdata=this.resData.bannerdata;
          // console.log(this.bannerdata)
        }
      })
    }
}
