import puppeteer from 'puppeteer';

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
