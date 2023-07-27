import { test, expect } from "@playwright/test";
import commons from "../supports/commons";

test.beforeEach(async ({ page }) => {
  const common = new commons(page);
  await common.login()
})

test("Search System Users", async ({ page }) => {
  const common = new commons(page);
  await common.searchSystemUsers();
});