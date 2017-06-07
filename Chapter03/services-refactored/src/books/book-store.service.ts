import { Injectable } from '@angular/core';

import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable()
export class BookStoreService {

  booksList: Book[] = BOOKS;

  getBooks() {
    return this.booksList;
  }

  getBook(isbn: number) {
    return this.booksList.find(book => book.isbn === isbn);
  }

  deleteBook(isbn: number) {
    this.booksList = this.booksList.filter(book => book.isbn !== isbn);
    return this.booksList;
  }
}
