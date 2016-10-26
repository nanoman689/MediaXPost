import { MediaXPostPage } from './app.po';

describe('media-xpost App', function() {
  let page: MediaXPostPage;

  beforeEach(() => {
    page = new MediaXPostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
