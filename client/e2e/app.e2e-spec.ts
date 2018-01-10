import { AppPage } from './app.po';

describe('client App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should load a list of tasks', async () => {
    page.navigateTo();
    const elements = await page.getToDoListElements();
    expect(elements.length).toBeGreaterThan(0);
  });

  it('should have a delete button', async () => {
    page.navigateTo();
    const elements = await page.getToDoListElements();
    const button = page.getDeleteButton(elements[0].id);
    expect(button).toBeDefined();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
