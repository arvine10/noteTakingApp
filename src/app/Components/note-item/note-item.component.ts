import { Component, Input, OnInit } from '@angular/core';
import { Notes } from 'src/app/Notes/Notes';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() notes : Notes[] | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.notes);
  }

}
