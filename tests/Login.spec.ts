import { test, expect } from "@playwright/test";
import commons from "../supports/commons";


test("Login to SauceDemo", async ({ page }) => {
    const common = new commons(page);
    await common.login()
})
