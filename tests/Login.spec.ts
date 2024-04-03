import { test, expect } from "@playwright/test";
import commons from "../supports/commons";


test("Login to Swag Labs", async ({ page }) => {
    const common = new commons(page);
    await common.login()
})
