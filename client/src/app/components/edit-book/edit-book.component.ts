import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interface/interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.sass'],
})
export class EditBookComponent {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}
  id!: string;
  book!: Book;
  formattedDate!: string;

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((params) => {
      this.id = params['id'];
    });

    this.loadBook(this.id);
  }
  loadBook(id: string) {
    this.apiService.loadBook(id).subscribe((response) => {
      this.book = response.data;
    });
  }

  editBook(
    _id: string,
    name: string,
    description: string,
    publishDateStr: string,
    priceStr: string
  ): void {
    const publishDate = new Date(publishDateStr);
    const price = parseFloat(priceStr);
    console.log(name, description, publishDate, price);
    event?.preventDefault();
    this.apiService
      .editBook(_id, name, description, publishDate, price)
      .subscribe(
        (response) => {
          console.log(response);
          if (response.status == 'OK') {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Book details updated successfully',
              showConfirmButton: false,
              timer: 1500,
            });
            const currentUrl = this.router.url;
            this.router.navigate(['/']);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Something went wrong',
            });
          }
        },
        (error) => {
          console.error('Error adding book:', error);
        }
      );
  }
}
