import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notes } from 'src/app/Notes/Notes';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.css']
})
export class TakeNotesComponent implements OnInit {

  constructor(private activeRoute : ActivatedRoute, 
              private noteService : NotesService) { }
  note : any;
  title : String = '';
  toggle: boolean = false;
  text : String = '';

  ngOnInit(): void {
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.note = this.noteService.getNoteById(id).subscribe((note)=>{
      this.note = note;
      this.text = this.note.text;
    })
  }

  editTitle(){
    this.toggle = !this.toggle;
  }

  saveNotes(){
    if (this.title.length > 0) this.note.title = this.title;
    this.note.text = this.text;
    this.noteService.updateNotes(this.note).subscribe((note)=>{
      this.toggle = false;
    });
  }
 
}
