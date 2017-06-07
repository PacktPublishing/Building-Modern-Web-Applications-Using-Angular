import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  baseUrl: string = 'http://localhost:4567';

  constructor(private http: Http) { }

  getBooksList(): Observable<Book[]> {
    const url = `${this.baseUrl}/books`;
    return this.http.get(url)
              .map(response => response.json() as Book[]);
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.get(url)
              .map(response => response.json() as Book);
  }
}
