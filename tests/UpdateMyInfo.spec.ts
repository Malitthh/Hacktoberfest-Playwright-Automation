import { test, expect } from "@playwright/test";
import commons from "../supports/commons";

test.beforeEach(async ({ page }) => {
  const common = new commons(page);
  await common.login()
})

test("Update My Info", async ({ page }) => {
    const common = new commons(page);
    await common.updateMyInfo();
  });