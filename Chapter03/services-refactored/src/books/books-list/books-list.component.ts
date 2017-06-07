import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { BookStoreService } from '../book-store.service';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  providers: [BookStoreService]
})
export class BooksListComponent implements OnInit {

  booksList: Book[] = [];
  selectedBook: Book;

  constructor(private bookStoreService: BookStoreService) {
  }

  ngOnInit() {
    this.getBooksList();
  }

  getBooksList() {
    this.booksList = this.bookStoreService.getBooks();
  }

  getBookDetails(isbn: number) {
    this.selectedBook = this.bookStoreService.getBook(isbn);
  }

  deleteBook(isbn: number) {
    this.selectedBook = null;
    this.booksList = this.bookStoreService.deleteBook(isbn);
  }
}
