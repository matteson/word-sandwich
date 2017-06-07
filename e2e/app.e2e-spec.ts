import { DictGamePage } from './app.po';

describe('dict-game App', () => {
  let page: DictGamePage;

  beforeEach(() => {
    page = new DictGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
