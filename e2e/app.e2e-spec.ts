import { AngularGestionTacheExemplePage } from './app.po';

describe('angular-gestion-tache-exemple App', () => {
  let page: AngularGestionTacheExemplePage;

  beforeEach(() => {
    page = new AngularGestionTacheExemplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
