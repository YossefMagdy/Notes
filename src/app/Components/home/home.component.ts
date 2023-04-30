import { Note } from './../../Core/interface/note';
import { NoteService } from './../../Core/Service/note.service';
import { AuthService } from './../../Core/Service/auth.service';
import { Component, OnInit } from '@angular/core';
import { NoteDataComponent } from '../note-data/note-data.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value = '';
  notes!:Note[]
  constructor(public dialog: MatDialog,private AuthService:AuthService,private NoteService:NoteService) {}


  ngOnInit(): void {
    this.Getnotes()
  }

  openDialog(){
    const dialogRef = this.dialog.open(NoteDataComponent);

    dialogRef.afterClosed().subscribe({
      next:(Resp)=>{
        if(Resp=='add'){
          this.Getnotes()
        }
  
      }
    })
} 

Getnotes(){
  const model={
    token:localStorage.getItem('userToken'),
    userID:this.AuthService.UserData.getValue()._id
  }
this.NoteService.GetNotes(model).subscribe({
  next:(res)=>{
    if(res.message=="success"){
      this.notes=res.Notes

    }
  }
})
}
UpdateNote(note:object){
  const dialogRef = this.dialog.open(NoteDataComponent,{
    data:{
      note
    }
  });
  dialogRef.afterClosed().subscribe({
    next:(R)=>{
      console.log(R)
      if(R=='add'){
        this.Getnotes()
      }
    
    }
  })
  
}

deleteNote(id:string,i:number){

  const model={
    NoteID:id,
    token:localStorage.getItem('userToken'),
  }
  this.notes.splice(i,1)

  this.NoteService.Delete(model).subscribe({
    next:(Res)=>{
      if(Res.message=='deleted')
    {}
    }
  })
}
}
