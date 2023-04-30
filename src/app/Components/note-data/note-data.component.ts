import { NoteService } from './../../Core/Service/note.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-note-data',
  templateUrl: './note-data.component.html',
  styleUrls: ['./note-data.component.scss']
})
export class NoteDataComponent implements OnInit{

  userData:any;
  UPdateNote:any
  constructor (private _fb:FormBuilder,private NoteService:NoteService,private _MatDialogRef:MatDialogRef<NoteDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any ){
    }
  ngOnInit(): void {
    this.CreateForm() 
    
    this.userData=jwtDecode(JSON.stringify(localStorage.getItem('userToken')))
  }
  Addfrom!:FormGroup
  CreateForm(){
    this.Addfrom=this._fb.group({
      title:[this.data? this.data.note.title: '',[Validators.required]],
      desc:[this.data? this.data.note.desc: '',[Validators.required]],
      token:[localStorage.getItem('userToken')]
    })
  }
  sendData(){
      const Data={
        ...this.Addfrom.value,
        citizenID:this.userData._id
      }
    if(this.Addfrom.valid){
      if(this.data!=null){
        this.updateNote()
      }else{
        this.NoteService.addNote(Data).subscribe({
          next:(Res)=>{
            if(Res.message=='success')
            this._MatDialogRef.close("add")
          }
        })
      }
   
    }
  }
  updateNote(){
    this.Addfrom.get('title')?.value
    const model={
      token:localStorage.getItem('userToken'),
      title:this.Addfrom.get('title')?.value,
      desc:this.Addfrom.get('desc')?.value,
      NoteID:this.data.note._id
    }
    this.NoteService.Update(model).subscribe({
      next:(Res)=>{
        if(Res.message=="updated"){
          this._MatDialogRef.close('add')
        }
      }
    })
  }

}
