import { Page, expect } from '@playwright/test'
import { searchFlights } from './cleartrip.locator'
import exp from 'constants';


const pageUrl = ("https://www.cleartrip.com/")

export class Home_Page {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async launchURL() {
        await this.page.goto(pageUrl);
        await this.page.locator(searchFlights.close_popup).click();
        await this.page.waitForLoadState();
    }


    async searchFlightsDetails() {
        await expect(this.page.locator(searchFlights.where_from)).toBeVisible();
        await (this.page.locator(searchFlights.where_from)).click();
        await this.page.locator(searchFlights.select_city_where_from).nth(0).click()
        await (this.page.locator(searchFlights.where_to)).click();
        await (this.page.locator(searchFlights.select_city_where_to).nth(2)).click();
    }


    async selectDates() {
        await expect(this.page.locator(searchFlights.calender)).toBeVisible();
        await (this.page.locator(searchFlights.calender)).click();
        await (this.page.locator(searchFlights.booking_date)).click();
        await (this.page.locator(searchFlights.return_field)).click()
        await (this.page.locator(searchFlights.retrun_date)).click();
    }

    async searchFlightButton() {
        await expect(this.page.locator(searchFlights.search_flight_button)).toBeVisible();
        await (this.page.locator(searchFlights.search_flight_button)).click();
        await (this.page.waitForLoadState());

    }







}