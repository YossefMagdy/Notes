import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NoteDataComponent } from './Components/note-data/note-data.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AuthLayoutComponent } from './Layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './Layout/blank-layout/blank-layout.component';
import { FilterPipe } from './Core/pipes/filter.pipe';
import { PipePipe } from './Core/pipes/pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './Modules/shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './Core/interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NoteDataComponent,
    NotFoundComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    FilterPipe,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    SharedModule,
    NgxSpinnerModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:LoadingInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
