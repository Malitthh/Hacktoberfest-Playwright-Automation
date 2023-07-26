const { test, expect } = require("@playwright/test");
import { Page } from "@playwright/test";
const data = require("../fixtures/testData.json");

class commons {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async login() {
        await this.page.goto("/");
        await this.page.getByPlaceholder('Username').click();
        await this.page.getByPlaceholder('Username').fill(data.Username);
        await this.page.getByPlaceholder('Password').click();
        await this.page.getByPlaceholder('Password').fill(data.Password);
        await this.page.getByRole('button', { name: 'Login' }).click();
        await expect(this.page).toHaveTitle(/OrangeHRM/);
    }

}
export default commons;