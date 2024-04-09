import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ListBooksComponent } from './components/list-books/list-books.component';


const routes: Routes = [
  { path: '', component: ListBooksComponent }, 
  { path: 'add-book', component: AddBookComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
