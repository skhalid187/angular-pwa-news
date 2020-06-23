import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .main-container h1')).getText() as Promise<string>;
  }

  getArticleList(): Promise<string[]> {
    return element.all(by.css('app-root .main-container .article-text')).map(elem => {
      return elem.getText();
    }) as Promise<string[]>;
  };
}
