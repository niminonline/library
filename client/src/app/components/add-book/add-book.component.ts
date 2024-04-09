import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.sass'],
})
export class AddBookComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  addBook(
    name: string,
    description: string,
    publishDateStr: string,
    priceStr: string
  ): void {
    const publishDate = new Date(publishDateStr);
    const price = parseFloat(priceStr);
    console.log(name, description, publishDate, price);
    event?.preventDefault();
    this.apiService.addBook(name, description, publishDate, price).subscribe(
      (response) => {
        console.log(response);
        if (response.status == 'OK') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'User registered successfully',
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
