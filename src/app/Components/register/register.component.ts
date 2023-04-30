import { Router } from '@angular/router';
import { AuthService } from './../../Core/Service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Error:string=''
  hide = true;


constructor(private _fb:FormBuilder, private AuthService:AuthService,private Router:Router){}
  ngOnInit(): void {
    this.Handleform()
    
  }
  RegisterForm!:FormGroup

  Handleform(){
    this.RegisterForm=this._fb.group({
      first_name:['',[Validators.required]],
      last_name:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      age :['',[Validators.required]],
    })
  }
  Register(){

    if(this.RegisterForm.valid){
      this.AuthService.register(this.RegisterForm.value).subscribe({
        next:(Res)=>{
          if(Res.message=='success'){
            this.Router.navigate(['/login'])
          }
          else{
            this.Error='Email already registered'
          }
        }
      })
    }
  }
}
