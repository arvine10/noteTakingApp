import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NoteItemComponent } from './Components/note-item/note-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TakeNotesComponent } from './Components/take-notes/take-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteItemComponent,
    TakeNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
