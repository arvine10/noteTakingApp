import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
// import {MatDialogModule} from "@angular/material";
import {MatDialogModule} from "@angular/material/dialog";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NoteItemComponent } from './Components/note-item/note-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TakeNotesComponent } from './Components/take-notes/take-notes.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteItemComponent,
    TakeNotesComponent,
    CreateNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
