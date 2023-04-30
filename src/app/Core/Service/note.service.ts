import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from '../Enviroment/enviroment';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private _HttpClient:HttpClient) { }


  addNote(NoteData:object):Observable<any>{
    return this._HttpClient.post(Enviroment.BaseUrl+'addNote',NoteData)
  }
  Update(NoteData:object):Observable<any>{
    return this._HttpClient.put(Enviroment.BaseUrl+'updateNote',NoteData)
  }
  GetNotes(FormData:object):Observable<any>{
    return this._HttpClient.post(Enviroment.BaseUrl+'getUserNotes',FormData)
  }
  Delete(FormData:object):Observable<any>{
    const model={
      body:FormData
    }
    return this._HttpClient.delete(Enviroment.BaseUrl+'deleteNote',model)
  }
  
}
