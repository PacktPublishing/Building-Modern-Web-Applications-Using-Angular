import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  baseUrl: string = 'http://localhost:4567';
  headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.get(url)
      .map(response => response.json() as Book);
  }

  getBooks(): Observable<Book[]> {
    const url = `${this.baseUrl}/books`;
    return this.http.get(url)
      .map(response => response.json() as Book[]);
  }

  addBook(book: Book) {
    const url = `${this.baseUrl}/books`;
    let body = JSON.stringify(book);
    return this.http.post(url, body, {headers: this.headers})
      .map(response => response.json());
  }

  deleteBook(id: number) {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .map(response => response.json());
  }
}
