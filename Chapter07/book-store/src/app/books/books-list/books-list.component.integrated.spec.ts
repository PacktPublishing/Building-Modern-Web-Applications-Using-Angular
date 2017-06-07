import { ComponentFixture, TestBed, async, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { BooksListComponent } from './books-list.component';
import { BookStoreService } from '../book-store.service';
import { Book } from '../book';

describe('BooksListComponent', () => {
  let fixture: ComponentFixture<BooksListComponent>,
    component: BooksListComponent,
    debugElement: DebugElement,
    element: HTMLElement,
    mockBookStoreService;

  const booksList: Book[] = [{
    id: 1,
    isbn: 9781783980628,
    title: 'Getting Started with Grunt',
    authors: 'Jaime Pillora',
    published: 'February 2014',
    description: 'JavaScript and Grunt.',
    coverImage: 'https://test.com/img1.png'
  }];

  beforeEach(async(() => {

    mockBookStoreService = jasmine.createSpyObj('mockBookStoreService', ['getBooks']);
    mockBookStoreService.getBooks.and.returnValue(Observable.of(booksList));

    TestBed.configureTestingModule({
      declarations: [
        BooksListComponent
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: BookStoreService, useValue: mockBookStoreService }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
  });

  it('should display books list', () => {
    debugElement = fixture.debugElement.query(By.css('.book-card'));
    element = debugElement.nativeElement.firstElementChild;
    expect(element.style.backgroundImage).toContain(booksList[0].coverImage);
  });

  it('should not display updated books list', () => {

    component.booksList = [{
      id: 2,
      isbn: 9781786462084,
      title: 'Laravel 5.x Cookbook',
      authors: 'Alfred Nutile',
      published: 'September 2016',
      description: 'Laravel 5.x',
      coverImage: 'https://test.com/img2.png'
    }];

    debugElement = fixture.debugElement.query(By.css('.book-card'));
    element = debugElement.nativeElement.firstElementChild;

    expect(element.style.backgroundImage).toContain(booksList[0].coverImage);
    expect(element.style.backgroundImage).not.toContain(component.booksList[0].coverImage);
  });

  it('should display updated books list', () => {

    component.booksList = [{
      id: 2,
      isbn: 9781786462084,
      title: 'Laravel 5.x Cookbook',
      authors: 'Alfred Nutile',
      published: 'September 2016',
      description: 'Laravel 5.x',
      coverImage: 'https://test.com/img2.png'
    }];

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('.book-card'));
    element = debugElement.nativeElement.firstElementChild;

    expect(element.style.backgroundImage).toContain(component.booksList[0].coverImage);
  });
});
