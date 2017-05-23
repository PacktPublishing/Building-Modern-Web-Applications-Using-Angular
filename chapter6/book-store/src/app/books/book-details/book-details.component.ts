import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { BookStoreService } from '../book-store.service';
import { Book } from '../book';
import { slideInOutAnimation } from '../../animations';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  animations: [ slideInOutAnimation ]
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private storeService: BookStoreService) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.storeService.getBook(+params['id']))
      .subscribe(book => this.book = book);
  }

  deleteBook(id: number) {
    this.storeService.deleteBook(id)
      .subscribe(res => this.router.navigate(['/books']));
  }

  goBack() {
    this.location.back();
  }
}
