import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Notes } from 'src/app/Notes/Notes';
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CreateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    form = new FormGroup({
      title : new FormControl('')
    });

  ngOnInit(): void {
  }

  addNote(){
    let note = {title : this.form.value.title, text: "", created: this.data, updated: this.data}
    this.dialogRef.close(note);
  }

  close(){
    this.dialogRef.close(null);
  }

}
