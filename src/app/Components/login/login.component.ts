import { Router } from '@angular/router';
import { AuthService } from './../../Core/Service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Error:string=''
  hide = true;


constructor(private _fb:FormBuilder, private AuthService:AuthService,private Router:Router){}
  ngOnInit(): void {
    this.Handleform()
    
  }
  loginForm!:FormGroup

  Handleform(){
    this.loginForm=this._fb.group({ 
      email:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }
  Login(){

    if(this.loginForm.valid){
      this.AuthService.Login(this.loginForm.value).subscribe({
        next:(Res)=>{
          if(Res.message=='success'){
            this.Router.navigate(['/home'])
            localStorage.setItem('userToken',Res.token)
            this.AuthService.decode()
          }
          else{
            this.Error=Res.message
          }
        }
      })
    }
  }
}
