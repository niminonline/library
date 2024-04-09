import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';


const routes: Routes = [
  { path: '', component: ListBooksComponent }, 
  { path: 'add-book', component: AddBookComponent }, 
  { path: 'edit-book', component: EditBookComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
