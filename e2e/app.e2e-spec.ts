import { ProjectSearchAppPage } from './app.po';

describe('project-search-app App', function() {
  let page: ProjectSearchAppPage;

  beforeEach(() => {
    page = new ProjectSearchAppPage();
  });

  it('should display message saying Client Accounts', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Client Accounts');
  });
});
