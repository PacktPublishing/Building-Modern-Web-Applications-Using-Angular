import { BookStoreStartPage } from './app.po';

describe('book-store-start App', () => {
  let page: BookStoreStartPage;

  beforeEach(() => {
    page = new BookStoreStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
