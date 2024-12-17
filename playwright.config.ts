import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config();
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e',
  timeout: 300000,
  expect: {
    timeout: 90000,
  },
  globalTimeout: 60 * 60 * 1000 /* Run tests in files in parallel */,
  fullyParallel:
    true /* Fail the build on CI if you accidentally left test.only in the source code. */,
  forbidOnly: !!process.env.CI /* Retry on CI only */,
  retries: 1 /* Opt out of parallel tests on CI. */,
  workers: process.env.CI
    ? 1
    : undefined /* Reporter to use. See https://playwright.dev/docs/test-reporters */,
  reporter: [
    ["list"],
    ["junit", { outputFile: 'playwright/testResults/TESTS-1.xml' }],
  ] /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */,
  use: {
    // Base URL to use in actions like await page.goto('/').
    baseURL: process.env.URL, // Capture screenshot after each test failure.
    screenshot: 'only-on-failure', // Record trace only when retrying a test for the first time.
    trace: 'on-first-retry', // Record video only when retrying a test for the first time.
    video: 'on', // Change the default data-testid attribute.
    testIdAttribute: 'data-cy', //storage state for sessions
    storageState: 'storageState.json',
  } /* Configure projects for major browsers */,
  projects: [
    /* Test against branded browsers. */
    {
      name: "edge",
      use: {
        ...devices["Desktop Edge"],
        channel: "msedge",
        viewport: { width: 1920, height: 1000 },
      },
    }, // , // { //   name: 'chrome', //   use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // },
  ],
  globalSetup: require.resolve('./global-setup'),
  globalTeardown: require.resolve('./global-teardown'),
});