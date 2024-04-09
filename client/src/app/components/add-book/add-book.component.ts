import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.sass']
})
export class AddBookComponent {
  constructor(private apiService: ApiService){}

  addBook(name: string, description: string, publishDate: string, price: string): void {
    const publishDateObj = new Date(publishDate); 
    const priceNum = parseFloat(price)
    this.apiService.addBook(name, description, publishDateObj, priceNum)
      .subscribe(response => {
        console.log('Book added successfully:', response.message);
        
      }, error => {
        console.error('Error adding book:', error);
       
      });
  }

}
