const puppeteer = require('puppeteer');

jest.setTimeout(30000);
describe('Puppeteer testing', () => {
    it('Find Harry Potter film', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            devtools: false,
        });
        const page = await browser.newPage();
        await page.goto('http://localhost:8080/');
        await page.type('#site-search', 'Harry Potter');
        await page.click('.search__button', {clickCount: 1});
        await page.waitForTimeout(1000);
        const element = await page.$('.movieCard__title p');
        const text = await element.evaluate((el: any) => el.textContent);
        await browser.close();
        expect(text).toMatch(/Harry Potter/);
    });
    it('Sort films by release date from the earliest to the latest', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            devtools: false,
        });
        const page = await browser.newPage();
        await page.goto('http://localhost:8080/');
        await page.click('.header__sortOption', {clickCount: 1});
        await page.waitForTimeout(3000);
        const dates = await page.$$('.movieCard__releaseDate');
        const firstDate = await dates[0].evaluate((date: any) =>
            Number(date.textContent)
        );
        const lastDate = await dates[dates.length - 1].evaluate((date: any) =>
            Number(date.textContent)
        );
        await browser.close();
        expect(lastDate).toBeGreaterThan(firstDate);
    });

    it('Search by adventure genre returns adventure movies', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            devtools: false,
        });
        const page = await browser.newPage();
        await page.goto('http://localhost:8080/');
        const searchButtons = await page.$$('.search__modeButton ');
        await searchButtons[1].click({clickCount: 1});
        await page.waitForTimeout(3000);
        await page.type('#site-search', 'adventure');
        await page.click('.search__button', {clickCount: 1});
        await page.waitForTimeout(3000);
        const element = await page.$('.movieCard__genre p');
        const text = await element.evaluate((el: any) => el.textContent);
        await browser.close();
        expect(text).toMatch(/A|adventure/);
    });
});
