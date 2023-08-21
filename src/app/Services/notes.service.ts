import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notes } from '../Notes/Notes';
import { environment } from 'src/environments/environment.prod';

const headers = new HttpHeaders({
  'Content-Type' : 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class NotesService {

 
  constructor(private http : HttpClient) { }

  getNotes(): Observable<Notes[]>{
    return this.http.get<Notes[]>(environment.url);
  }

  getNoteById(id : number): Observable<Notes>{
    return this.http.get<Notes>(`${environment.url}/${id}`);
  }

  addNotes(note : Notes):Observable<any>{
    return this.http.post<Notes>(environment.url,note, {headers});
  }

  updateNotes(note : Notes): Observable<any>{
    return this.http.put<Notes>(`${environment.url}/${note.id}`,note,{headers});
  }

  deleteNotes(note : Notes): Observable<any>{
    return this.http.delete<Notes>(`${environment.url}/${note.id}`);
  }


}
