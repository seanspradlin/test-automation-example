import { browser, by, element } from 'protractor';
import { Task } from '../src/app/models';

export class AppPage {
  async getToDoListElements(): Promise<Task[]> {
    return element(by.css('#todolist'));
  }

  async clickCreateButton(): Promise<void> {
    return element(by.css('#create')).click();
  }

  async clickDeleteButton(id: string): Promise<void> {
    return element(by.css(`#del-${id}`)).click();
  }

  async navigateTo(): Promise<void> {
    return browser.get('/');
  }

  async getParagraphText(): Promise<string> {
    return element(by.css('app-root h1')).getText();
  }

  async clickFilterCompleted(): Promise<void> {
    return element(by.css('#complete-filter')).click();
  }

  async clickFilterIncomplete(): Promise<void> {
    return element(by.css('#incomplete-filter')).click();
  }
}
