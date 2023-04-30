import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SweetAlert2Module.forRoot()
     
  ],
  exports:[
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    SweetAlert2Module
  ]
})
export class SharedModule { }
