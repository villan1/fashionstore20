import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BannerService {
  constructor(private _http:HttpClient) { }
  url="http://localhost:8899/api/";
   addbanner(data)
   {
  return this._http.post(this.url+"addbanner",data)
   }
   fetchbanner(){
    return this._http.get(this.url+'fetchbanner')
   }
}
