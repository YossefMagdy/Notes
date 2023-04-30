import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
MenuName:string='Login'
islogin:boolean=false
constructor(private _Router:Router){
  if(localStorage.getItem('userToken')!=null){
    this.islogin=true
  }
  this._Router.events.subscribe({
    next:(Response)=>{
      if(Response instanceof NavigationEnd ){
        this.MenuName=this._Router.url.slice(1)
        
      }
    }
  })
}
Logout(){
  this.islogin=false;
  localStorage.removeItem('userToken');
}


}
