import { browser, element, by } from 'protractor';

export class ProjectSearchAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.id('headingP')).getText();
  }
}
