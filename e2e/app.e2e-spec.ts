import { FolioPage } from './app.po';

describe('folio App', () => {
  let page: FolioPage;

  beforeEach(() => {
    page = new FolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
