import { chromium, type FullConfig } from "@playwright/test";
import commons from "./pages/commons.page";

async function globalSetup(config: FullConfig) {
  const { storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const common = new commons(page);

  // Ensure environment variables are defined
  const baseURL = process.env.URL;
  const username = process.env.username;
  const password = process.env.password;

  if (!username || !password) {
    throw new Error(
      "Environment variables 'username' and 'password' must be defined."
    );
  }

  // Navigate to base URL
  await page.goto(baseURL!);

  // Perform login steps
  await common.usernameInputField.click();
  await common.usernameInputField.fill(username);
  await common.passowrdInputField.click();
  await common.passowrdInputField.fill(password);
  await common.page.waitForTimeout(2000);
  await common.loginButton.click();

  // Save the storage state for authenticated sessions
  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;
