import { BookStoreService } from './book-store.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Book } from './book';


describe('BookStoreService', () => {
  let bookStoreService: BookStoreService,
    mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post', 'delete']);
    bookStoreService = new BookStoreService(mockHttp);
  });

  describe('deleteBook', () => {

    it('should remove the book', () => {
      const book: Book = {
        id: 12,
        isbn: 9781849692380,
        title: 'test title',
        authors: 'test author',
        published: 'test date',
        description: 'test description',
        coverImage: 'test image'
      };

      mockHttp.delete.and.returnValue(Observable.of(book));
      const response = bookStoreService.deleteBook(12);
      
      response.subscribe(value => {
         expect(value).toBe(book);
      });
    });

    it('should call http delete method with right url', () => {
      const id = 12;
      const url = `http://58e15045f7d7f41200261f77.mockapi.io/api/v1/books/${id}`;
      mockHttp.delete.and.returnValue(Observable.of(true));
      const response = bookStoreService.deleteBook(id);
      expect(mockHttp.delete).toHaveBeenCalledWith(url, jasmine.any(Object));
    });

  });
});

