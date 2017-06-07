import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from '../book';
import { BookStoreService } from '../book-store.service';
import { slideInOutAnimation } from '../../animations';

@Component({
  selector: 'new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
  animations: [ slideInOutAnimation ]
})
export class NewBookComponent implements OnInit {
  newBookForm: FormGroup;
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private location: Location,
              private storeService: BookStoreService) {
  }

  ngOnInit() {
    this.newBookForm = this.formBuilder.group({
      isbn: ['', Validators.required],
      title: ['', Validators.required],
      authors: ['', Validators.required],
      published: ['', Validators.required],
      description: ['', Validators.required],
      coverImage: ['', Validators.required]
    });
  }


  saveBook() {
    if (this.newBookForm.valid) {
      var book = this.newBookForm.value as Book;
      this.storeService.addBook(book)
        .subscribe(res => this.router.navigate(['/books']));
    }
  }
}
