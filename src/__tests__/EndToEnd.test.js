import puppeteer from 'puppeteer';
import { mockData } from '../mock-data';

describe('Show/hide the details of an event', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event-card');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event-card .event-card__description');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event-card__details-toggle');
    const eventDetails = await page.$('.event-card .event-card__description');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event-card__details-toggle');
    const eventDetails = await page.$('.event-card .event-card__description');
    expect(eventDetails).toBeNull();
  });
});

describe('Filter events by city', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event-card');
  });

  afterAll(() => {
    browser.close();
  });

  test('All events displayed by default', async () => {
    const eventsDisplayed = await page.$$('.event-card');
    expect(eventsDisplayed.length).toBe(mockData.length);
  });

  test('User should see a list of suggestions when they search', async () => {
    const testIsVisible = async () =>
      await page.$eval('.suggestions', (elem) => {
        return (
          window.getComputedStyle(elem).getPropertyValue('display') !== 'none'
        );
      });

    expect(await testIsVisible()).toBe(false);

    await page.type('.search-bar', 'Berlin');

    expect(await testIsVisible()).toBe(true);
  });

  test('User can select a city to decide which events to display', async () => {
    await page.click('.suggestions li');

    const expectedEvents = mockData.filter((event) =>
      event.location.toUpperCase().includes('BERLIN, GERMANY')
    );

    const displayedEvents = await page.$$('.event-card');

    expect(displayedEvents.length).toBe(expectedEvents.length);
  });
});
