import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from '../book';
import { BookStoreService } from '../book-store.service';

@Component({
  selector: 'new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  newBookForm: FormGroup;

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
