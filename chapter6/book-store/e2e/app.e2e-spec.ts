import { BookStorePage } from './app.po';

describe('book-store App', () => {
  let page: BookStorePage;

  beforeEach(() => {
    page = new BookStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
