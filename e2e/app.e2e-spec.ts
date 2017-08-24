import { AlexandriaPage } from './app.po';

describe('alexandria App', () => {
  let page: AlexandriaPage;

  beforeEach(() => {
    page = new AlexandriaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
