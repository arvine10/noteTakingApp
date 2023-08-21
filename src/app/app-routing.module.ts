import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TakeNotesComponent } from './Components/take-notes/take-notes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'notes/:id', component: TakeNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
