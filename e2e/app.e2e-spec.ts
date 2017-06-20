import { BoxesPage } from './app.po';

describe('boxes App', () => {
  let page: BoxesPage;

  beforeEach(() => {
    page = new BoxesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
