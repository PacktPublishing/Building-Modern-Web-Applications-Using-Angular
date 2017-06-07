import { Component } from '@angular/core';
import { BookStoreService, Book } from './books/index';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <book-search (search)="searchBook($event)"></book-search>
      <books-list [books]="filteredBooks"></books-list>
    </div>
  `,
  providers: [BookStoreService]
})
export class AppComponent {

  filteredBooks: Book[];

  constructor(private bookStoreService: BookStoreService) {
  }

  searchBook(title: string) {
    this.bookStoreService
      .getBooks(title)
      .subscribe(books => this.filteredBooks = books);
  }
}