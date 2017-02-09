import { AngularAppGridPage } from './app.po';

describe('angular-app-grid App', function() {
  let page: AngularAppGridPage;

  beforeEach(() => {
    page = new AngularAppGridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
