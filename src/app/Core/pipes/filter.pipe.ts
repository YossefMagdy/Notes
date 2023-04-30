import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../interface/note';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(notes: Note[],searchterm: string): any[] {

    if(searchterm.length>0){
      return notes.filter((e)=>{
        
       return e.title.toLowerCase().includes(searchterm.toLowerCase())
      });
    }else{
      return notes
    }
    
    
  }

}
