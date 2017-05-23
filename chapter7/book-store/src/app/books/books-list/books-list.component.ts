import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { BookStoreService } from '../book-store.service';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksList: Book[] = [];

  constructor(private storeService: BookStoreService) {
  }

  ngOnInit() {
    this.getBooksList();
  }

  getBooksList() {
    this.storeService.getBooks()
      .subscribe(books => this.booksList = books);
  }

}
