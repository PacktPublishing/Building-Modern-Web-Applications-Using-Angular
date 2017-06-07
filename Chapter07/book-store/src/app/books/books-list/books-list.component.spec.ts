import { BooksListComponent } from './books-list.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('BooksListComponent', () => {
  let booksListComponent: BooksListComponent,
    mockBookStoreService;

  beforeEach(() => {
    mockBookStoreService = jasmine.createSpyObj('mockBookStoreService', ['getBooks']);
    booksListComponent = new BooksListComponent(mockBookStoreService);
  });

  it('initial books list should be empty', () => {
    expect(booksListComponent.booksList.length).toBe(0);
  });

  describe('ngOnInit', () => {

    it('should fetch books list', () => {
      const books = [{}, {}];
      expect(booksListComponent.booksList.length).toBe(0);
      mockBookStoreService.getBooks.and.returnValue(Observable.of(books));
      booksListComponent.ngOnInit();
      expect(booksListComponent.booksList.length).toBe(2);
    });

  });
});
