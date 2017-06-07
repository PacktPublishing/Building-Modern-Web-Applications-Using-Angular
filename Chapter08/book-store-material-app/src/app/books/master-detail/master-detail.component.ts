import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookStoreService } from '../book-store.service';

@Component({
  selector: 'bl-master-detail',
  styleUrls: ['./master-detail.component.scss'],
  templateUrl: './master-detail.component.html'
})
export class MasterDetailComponent implements OnInit {
  booksList: Book[] = [];
  selectedBook: Book;

  constructor(private bookStoreService: BookStoreService) {
  }

  ngOnInit() {
    this.bookStoreService
      .getBooks()
      .subscribe(res => this.booksList = res);
  }
}
