import { test, expect } from "@playwright/test";
import commons from "../supports/commons";

test.beforeEach(async ({ page }) => {
  const common = new commons(page);
  await common.login()
})

test("Add to Cart", async ({ page }) => {
  const common = new commons(page);
  const random = commons.generateRandomData();
  await common.addtoCart();

  await page.click('button[data-test="checkout"]');
  await page.type('input[id="first-name"]', random.namefirst);
  await page.type('input[id="last-name"]', random.namelast);
  await page.type('input[id="postal-code"]', random.zip);
  await page.click("//div[@class='checkout_buttons']/input[@id='continue']");


  // // Assertions for Payment Information
  await expect(page.waitForSelector('text=Payment Information')).resolves.toBeTruthy();
  await expect(page.waitForSelector('text=SauceCard #31337')).resolves.toBeTruthy();

  // // Assertions for Shipping Information
  await expect(page.waitForSelector('text=Shipping Information')).resolves.toBeTruthy();
  await expect(page.waitForSelector('text=Free Pony Express Delivery!')).resolves.toBeTruthy();

});