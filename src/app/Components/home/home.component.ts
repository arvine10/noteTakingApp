import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/Notes/Notes';
import { NOTES } from 'src/app/Notes/AllNotes'
import { NotesService } from 'src/app/Services/notes.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateNoteComponent } from '../create-note/create-note.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title : any = '';
  notes : Notes[] = NOTES;
  copy : Notes[] = [];


  constructor(private noteService : NotesService,
              private dialog : MatDialog) { }


  
deleteNote(note : Notes){
  this.noteService.deleteNotes(note).subscribe(()=>{
    this.copy = this.copy.filter((notes)=>notes.id != note.id)
    this.notes = this.copy;
  });
}

  filter(event : any){
    const filterType = event.target.text;
    if (filterType === 'Title')this.filterByTitle();
    else if (filterType === 'Date')this.filterByDate();
    
  }

  filterByDate(){
    this.copy = this.copy.sort((a,b)=>{
      if (a.updated < b.updated) return -1;
      if (a.updated > b.updated) return 1
      return 0
    });
    this.notes = this.copy;
  }

  filterByTitle(){
    this.copy = this.copy.sort((a,b)=>{
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    this.notes = this.copy;
  }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes)=>{
      this.notes = notes;
      this.copy = notes;
    });
  }

  searchTitle(){
    let val = this.title.toLowerCase();
    this.notes = this.copy.filter((note)=>note.title.toLowerCase().includes(val));
  }

  generateTimeStap(){
    var d = new Date,
    dformat = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
    return dformat;
  }

  addNote(){
    const dformat = this.generateTimeStap();
    let dialogRef = this.dialog.open(CreateNoteComponent, {
      width: "350px",
      height: "250px",
      data : dformat,
      panelClass: 'container',
      autoFocus: true
     
    });

    dialogRef.afterClosed().subscribe((result)=>{
      if (result && result.title.length > 0){
        this.noteService.addNotes(result).subscribe((note)=>{
          this.copy.push(note);
          this.notes = this.copy;
        })
      }
    })
    
  }

}
