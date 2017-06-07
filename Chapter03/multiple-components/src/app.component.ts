import { Component } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Component({
  selector: 'books-list',
  templateUrl: './app.component.html'
})
export class AppComponent {
  booksList: Book[] = BOOKS;
  selectedBook: Book;

  getBookDetails(isbn: number) {
    this.selectedBook = this.booksList.find(book => book.isbn === isbn);
  }

  deleteBook(isbn: number) {
    this.selectedBook = null;
    this.booksList = this.booksList.filter(book => book.isbn !== isbn);
  }
}
