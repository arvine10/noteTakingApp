import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/Notes/Notes';
import { NOTES } from 'src/app/Notes/AllNotes'
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title : any = '';
  notes : Notes[] = NOTES;
  copy : Notes[] = [];


  constructor(private noteService : NotesService) { }

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

}
