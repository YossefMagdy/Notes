import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Enviroment } from '../Enviroment/enviroment';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
UserData:BehaviorSubject<any>=new BehaviorSubject(null)

  constructor(private HttpClient:HttpClient) { 
    if(localStorage.getItem('userToken')!=null){
      this.decode()
    }
    else{
      this.UserData.next(null)
    }
    
  }
  decode(){
    let decode=JSON.stringify(localStorage.getItem('userToken'))
      let encode:any=jwtDecode(decode)
      this.UserData.next(encode)
    
  }
  register(formData:Object):Observable<any>{
    return this.HttpClient.post(Enviroment.BaseUrl+'signup',formData)
  }

  Login(formData:Object):Observable<any>{
    return this.HttpClient.post(Enviroment.BaseUrl+'signin',formData)
  }
}
