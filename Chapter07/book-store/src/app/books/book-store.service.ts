import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  baseUrl = 'http://58e15045f7d7f41200261f77.mockapi.io/api/v1/books/';
  headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.baseUrl}${id}`;
    return this.http.get(url)
      .map(response => response.json() as Book);
  }

  getBooks(): Observable<Book[]> {
    const url = `${this.baseUrl}`;
    return this.http.get(url)
      .map(response => response.json() as Book[]);
  }

  addBook(book: Book) {
    const url = `${this.baseUrl}`;
    const body = JSON.stringify(book);
    return this.http.post(url, body, {headers: this.headers})
      .map(response => response.json());
  }

  deleteBook(id: number) {
    const url = `${this.baseUrl}${id}`;
    return this.http.delete(url, {headers: this.headers});
  }
}
