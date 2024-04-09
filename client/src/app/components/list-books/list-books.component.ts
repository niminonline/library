import { Component,OnInit } from '@angular/core';
import { APIResponse, Book, BookListResponse } from 'src/app/interface/interface';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.sass']
})
export class ListBooksComponent {

  constructor(private apiService: ApiService, private router: Router) { }
  books: Book[] = []; 
  page = 1; 
  limit = 10; 
  search = '';
  
  ngOnInit(): void {
    this.fetchBooks(); 
  }
  fetchBooks(): void {
    this.apiService.getBooks(this.page, this.limit, this.search)
      .subscribe((response: BookListResponse) => {
        this.books = response.data; 
      }, error => {
        console.error('Error fetching books:', error);
       
      });
  }

  deleteBook(id:string) {
  this.apiService.deleteBook(id).subscribe((response:APIResponse)=>{
    if(response.status=="OK"){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Book deleted successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      const currentUrl = this.router.url;
      this.router
        .navigateByUrl('/add-book', { skipLocationChange: true })
        .then(() => {
          this.router.navigateByUrl(currentUrl);
        });

    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "Something went wrong",
      });
    }
  })
    }
    editBook(id:string) {
    throw new Error('Method not implemented.');
    }
 
}
