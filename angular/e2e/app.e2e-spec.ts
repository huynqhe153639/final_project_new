import { final_project_newTemplatePage } from './app.po';

describe('final_project_new App', function() {
  let page: final_project_newTemplatePage;

  beforeEach(() => {
    page = new final_project_newTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
