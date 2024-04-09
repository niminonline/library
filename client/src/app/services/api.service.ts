import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookListResponse, SingleBookResponse } from '../interface/interface';
import { APIResponse } from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:5000';

  getBooks(
    page: number,
    limit: number,
    search: string
  ): Observable<BookListResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())
      .set('search', search);
    return this.http.get<BookListResponse>(this.baseUrl + '/books', { params });
  }

  addBook(
    name: string,
    description: string,
    publishDate: Date,
    price: number
  ): Observable<APIResponse> {
    const bookData = { name, description, publishDate, price };
    return this.http.post<APIResponse>(this.baseUrl + '/add-book', bookData);
  }

  deleteBook(id: string | null): Observable<APIResponse> {
    const url = `${this.baseUrl}/delete-book/${id}`;
    return this.http.delete<APIResponse>(url);
  }
  editBook(
    _id: string,
    name: string,
    description: string,
    publishDate: Date,
    price: number
  ): Observable<APIResponse> {
    const bookData = { _id, name, description, publishDate, price };
    return this.http.put<APIResponse>(this.baseUrl + '/edit-book', bookData);
  }

  loadBook(id: string | null): Observable<SingleBookResponse> {
    const url = `${this.baseUrl}/book/${id}`;
    return this.http.get<SingleBookResponse>(url);
  }
}
