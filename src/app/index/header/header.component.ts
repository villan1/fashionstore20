import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  user;
  val

  constructor(private router:Router) { 
    this.user=localStorage.getItem('user')
    if(localStorage.getItem('user')!=null)
    {
      this.user=true;
    }
    else
    {
      this.val=true
    }
  }

  ngOnInit() {
  }

  logout()
  {
    localStorage.clear()
    this.router.navigateByUrl('/')
  }

}
