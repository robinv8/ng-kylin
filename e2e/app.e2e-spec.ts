import { NgKylinPage } from './app.po';

describe('ng-kylin App', () => {
  let page: NgKylinPage;

  beforeEach(() => {
    page = new NgKylinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
