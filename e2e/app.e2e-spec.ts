import { A2SpotifyPage } from './app.po';

describe('a2-spotify App', function() {
  let page: A2SpotifyPage;

  beforeEach(() => {
    page = new A2SpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
