import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/Notes/Notes';
import { NOTES } from 'src/app/Notes/AllNotes'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title : String = '';
  notes : Notes[] = NOTES;


  constructor() { }

  ngOnInit(): void {
  }

  searchTitle(){
    console.log(this.title);
  }

}
