import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookListResponse } from '../interface/interface';
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
    return this.http.get<BookListResponse>(this.baseUrl, { params });
  }

  addBook(
    name: string,
    description: string,
    publishDate: Date,
    price: number
  ): Observable<APIResponse> {
    const bookData = { name, description, publishDate, price };
    return this.http.post<APIResponse>(this.baseUrl, bookData);
  }
}
