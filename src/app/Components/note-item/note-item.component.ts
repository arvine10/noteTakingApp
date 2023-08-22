import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Notes } from 'src/app/Notes/Notes';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() notes : Notes[] | undefined;
  @Output() deleteNoteEvent : EventEmitter<Notes> = new EventEmitter();

  constructor(private route : Router) { }

  showDeleteBtn = false;

  ngOnInit(): void {
    console.log(this.notes);
  }

  goToNote(note : Notes){
    this.route.navigate(['/notes',note.id]);
  }

  toggleDelete(note : Notes){
    note.showDelete = !note.showDelete;
  }

  deleteNote(note : Notes){
    this.deleteNoteEvent.emit(note);
  }

}
