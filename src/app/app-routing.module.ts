import { BlankLayoutComponent } from './Layout/blank-layout/blank-layout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AuthLayoutComponent } from './Layout/auth-layout/auth-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { authGuard } from './Core/Guards/auth.guard';

const routes: Routes = [
  {path:'',component:BlankLayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',canActivate:[authGuard],component:HomeComponent,title:'Home'},
  ]},
  {path:'',component:AuthLayoutComponent,children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
  ]},
  {path:'**',component:NotFoundComponent}
  ] 



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
