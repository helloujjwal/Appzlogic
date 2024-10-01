import { test } from '@playwright/test'
import { Page } from '@playwright/test'
import { Home_Page } from '../src/clearTrip'

let homePage: Home_Page;
let page: Page;


test.describe('Search Flight', () => {
    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        context.clearCookies();
        page = await context.newPage();
        homePage = new Home_Page(page);
        await homePage.launchURL();
    })

    test('Enter the inputs to search flights', async ({ }) => {
        await homePage.searchFlightsDetails();
        await homePage.selectDates();
        await homePage.searchFlightButton();

    })







})