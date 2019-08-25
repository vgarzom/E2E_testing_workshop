import { TourOfHeroesPage } from './app.po';
import { browser, until, by } from 'protractor';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

});

//Busca un heroe
describe('Tour of heroes, search hero', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('looking space of search. Should find a hero', () => {
    page.navigateTo();
    expect(page.enterHeroSearch("Tornado").count()).toBe(1);
  });
});

//Elimina un heroe
describe('Tour of heroes, delete a hero', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
    page.navigateToHeroes();
  });

  it('Should remove a hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.removeAHero();
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });
});

//Edita un heroe
describe('Tour of heroes, update a hero', () => {
  let page: TourOfHeroesPage;
  const newName = "Superman";

  beforeEach(() => {
    page = new TourOfHeroesPage();
    page.navigateToHero0();
  });

  it('Should edit a hero and navigate', () => {
    page.updateHeroName(newName);
    browser.wait(until.elementLocated(by.tagName('my-heroes')), 5000);
    console.log("after the timeout");
    page.selectFirstHeroFromList();
    expect(page.getH2Tags()).toEqual(['My Heroes', newName.toUpperCase() + ' is my hero']);
  });

});

// Navega a un heroe desde el dashboard
describe('Tour of heroes, go to a hero from dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
    page.navigateTo();
  });

  it('Should navigate to first hero', () => {
    page.selectHeroFromDashboard();
    expect(page.getH2Tags()).toEqual(['Mr. Nice details!']);
  });
});

