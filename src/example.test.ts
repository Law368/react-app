const puppeteer = require('puppeteer');

jest.setTimeout(30000);
describe('Puppeteer testing', () => {
    it('1.Find the input and type Harry Potter, 2.click on the search button, 3.Clear the input, 4.type panther, 5.click on the first poster, 6.return to MovieList', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            devtools: false,
        });
        const page = await browser.newPage();
        await page.goto('http://localhost:8080/');
        await page.type('#site-search', 'Harry Potter');
        await page.click('.search__button', {clickCount: 1});
        await page.waitFor(1000);
        await page.reload();
        await page.goBack();
        const input = await page.$('#site-search');
        await input.click({clickCount: 3});
        await input.type('panther');
        await page.click('.search__button', {clickCount: 1});
        await page.waitFor(1000);
        await page.waitForSelector('.movieCard__poster');
        await page.$eval('.movieCard__poster', (posterElement: any) =>
            posterElement.setAttribute('id', 'panther')
        );
        await page.waitFor(5000);
        await page.click('#panther', {clickCount: 1});
        await page.reload();
        await page.waitFor(5000);
        await page.click('.header__searchButton', {clickCount: 1});
        await page.waitFor(1000);
        await page.reload();
        await browser.close();
    });
});
