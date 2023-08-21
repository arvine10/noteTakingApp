import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notes } from 'src/app/Notes/Notes';

@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.css']
})
export class TakeNotesComponent implements OnInit {

  constructor(private activeRoute : ActivatedRoute) { }
  note : any;

  ngOnInit(): void {
    this.note = this.activeRoute.snapshot.paramMap.get('id');
  }

}
