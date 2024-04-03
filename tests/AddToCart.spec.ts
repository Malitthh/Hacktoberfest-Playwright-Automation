import { test, expect } from "@playwright/test";
import commons from "../supports/commons";

test.beforeEach(async ({ page }) => {
  const common = new commons(page);
  await common.login();
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

  // Assertions for Payment Information
  await expect(page.waitForSelector('text=Payment Information')).resolves.toBeTruthy();
  await expect(page.waitForSelector('text=SauceCard #31337')).resolves.toBeTruthy();

  // Assertions for Shipping Information
  await expect(page.waitForSelector('text=Shipping Information')).resolves.toBeTruthy();
  await expect(page.waitForSelector('text=Free Pony Express Delivery!')).resolves.toBeTruthy();

  // Extract and assert dynamically for Price Total
  await page.waitForSelector('//div[@class="summary_subtotal_label"]');
  const itemTotalText = await page.$eval('//div[@class="summary_subtotal_label"]', el => el.textContent);
  const itemTotal = parseFloat(itemTotalText.split('$')[1].trim());

  await page.waitForSelector('//div[@class="summary_total_label"]');
  const taxText = await page.$eval('//div[@class="summary_tax_label"]', el => el.textContent);
  const tax = parseFloat(taxText.split('$')[1].trim());

  await page.waitForSelector('//div[@class="summary_total_label"]');
  const totalText = await page.$eval('//div[@class="summary_total_label"]', el => el.textContent);
  const total = parseFloat(totalText.split('$')[1].trim());

  const expectedTotal = itemTotal + tax;
  expect(total).toBe(expectedTotal);
  console.log('Total:', total);
  console.log('Expected Total:', expectedTotal);

  await page.click('//button[@id="finish"]');
  await page.waitForSelector('//h2[normalize-space()="Thank you for your order!"]');

});