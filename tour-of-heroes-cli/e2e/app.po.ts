import { browser, by, element, ElementFinder } from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  navigateToHero0() {
    return browser.get('/detail/0');
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  enterHeroSearch(hero: string) {
    element(by.id('search-box')).sendKeys(hero);
    return element.all(by.css('.search-result'));
  }

  removeAHero() {
    element(by.css('.heroes')).element(by.css('.delete')).click();
  }

  updateHeroName(name: string) {
    let input = element(by.tagName('input'));
    input.clear();
    input.sendKeys(name);
    element(by.buttonText('Save')).click();
  }

  selectFirstHeroFromList() {
    element(by.css('.heroes')).element(by.tagName('li')).click();
  }

  getH2Tags() {
    return element.all(by.tagName("H2")).getText();
  }

  gotoFirstHeroFromList() {
    element(by.css('.heroes')).element(by.tagName('li')).click();
    element(by.buttonText('View Details')).click();
  }

  getFirstHeroFromList() {
    return element(by.css('.heroes')).element(by.tagName('li')).all(by.tagName('span'));
  }

  getHeroName() {
    return element(by.tagName('input')).getText();
  }

  selectHeroFromDashboard() {
    element(by.css('.col-1-4')).click();
  }

  gotoSelectedHeroFromList() {
    element(by.buttonText('View Details')).click();
  }

  selectHeroSearched() {
    element(by.css('.search-result')).click();
  }
}
