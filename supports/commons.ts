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

    public async searchSystemUsers() {
        await this.page.locator("//span[text()='Admin']").click();
        await this.page.getByPlaceholder('Type for hints...').fill(data.Employeename);
        await this.page.getByRole('option', { name: data.Employeename }).click();
        const element = await this.page.waitForSelector(`//div[contains(text(), '${data.Employeename}')]`);
        const actualText = await element.innerText();
        await expect(actualText).toEqual(data.Employeename);
    }

    public async updateMyInfo(){
        await this.page.getByRole('link', { name: 'My Info' }).click();
        await this.page.getByPlaceholder('First Name').fill(data.Firstname);
        await this.page.getByPlaceholder('Middle Name').fill(data.Middlename);
        await this.page.getByPlaceholder('Last Name').fill(data.Lastname);
        await this.page.locator('form').filter({ hasText: 'Employee Full NameNicknameEmployee IdOther IdDriver\'s License NumberLicense Expi' }).getByRole('button').click();
        await this.page.getByText('Success', { exact: true }).click();
    }

}
export default commons;