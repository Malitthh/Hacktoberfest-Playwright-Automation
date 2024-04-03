const { test, expect } = require("@playwright/test");
import { Page } from "@playwright/test";
const data = require("../fixtures/swaglabstestData.json");

class commons {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async login() {
        await this.page.goto(data.Url);
        await this.page.getByPlaceholder('Username').click();
        await this.page.getByPlaceholder('Username').fill(data.Username);
        await this.page.getByPlaceholder('Password').click();
        await this.page.getByPlaceholder('Password').fill(data.Password);
        await this.page.click('input[data-test="login-button"]');
        await expect(this.page).toHaveTitle('Swag Labs');
    }

    public async addtoCart() {
        await this.page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
        await this.page.click('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        await this.page.click('button[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        await this.page.click('a.shopping_cart_link[data-test="shopping-cart-link"]');

    }

    static generateRandomData() {
        const randomFirstName = `Soap${Math.floor(Math.random() * 100)}`;
        const randomLastName = `Mactavish${Math.floor(Math.random() * 100)}`;
        const randomZip = Math.floor(Math.random() * 10000);
        return {
            namefirst: randomFirstName,
            namelast: randomLastName,
            zip: randomZip.toString()
        };
    }

}
export default commons;