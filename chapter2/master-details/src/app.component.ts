import { Component } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Component({
  selector: 'books-list',
  templateUrl: 'src/app.component.html'
})
export class AppComponent {
  booksList: Book[] = BOOKS;
  selectedBook: Book;

  getBookDetails(isbn: number) {
    this.selectedBook = this.booksList.find(book => book.isbn === isbn);
  }
}
