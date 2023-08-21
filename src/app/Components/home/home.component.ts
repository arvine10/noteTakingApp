import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title : String = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchTitle(){
    console.log(this.title);
  }

}
