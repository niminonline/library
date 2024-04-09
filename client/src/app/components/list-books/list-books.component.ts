import { Component, OnInit } from '@angular/core';
import {
  APIResponse,
  Book,
  BookListResponse,
} from 'src/app/interface/interface';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.sass'],
})
export class ListBooksComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  books: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  searchQuery: string = '';

  ngOnInit(): void {
    this.fetchBooks();
  }
  fetchBooks(page: number = this.currentPage): void {
    this.apiService.getBooks(page, 3, this.searchQuery).subscribe(
      (response: BookListResponse) => {
        this.books = response.data;
        this.currentPage = response.page;
        this.totalPages = Math.ceil(response.totalCount / response.limit);
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.fetchBooks(this.currentPage - 1);
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.fetchBooks(this.currentPage + 1);
    }
  }

  goToPage(page: number): void {
    this.fetchBooks(page);
  }

  onSearch(): void {
    this.fetchBooks();
  }

  deleteBook(id: string) {
    this.apiService.deleteBook(id).subscribe((response: APIResponse) => {
      if (response.status == 'OK') {
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
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong',
        });
      }
    });
  }

  editBook(id: string) {
    this.router.navigate(['/edit-book'], { queryParams: { id } });
  }
}
