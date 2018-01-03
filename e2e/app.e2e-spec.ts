import { BasicMEANAppPage } from './app.po';

describe('basic-mean-app App', () => {
  let page: BasicMEANAppPage;

  beforeEach(() => {
    page = new BasicMEANAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
