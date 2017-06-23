import { BoostorePage } from './app.po';

describe('boostore App', () => {
  let page: BoostorePage;

  beforeEach(() => {
    page = new BoostorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
