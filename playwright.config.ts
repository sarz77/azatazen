import { defineConfig } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  testDir: "./src/tests", // Directory for tests
  timeout: 60000, // Max test duration
  retries: 2, // Retry failed tests
  use: {
    headless: false, // Runs tests in headed mode by default
    baseURL: process.env.BASE_URL, // Replace with your website URL
    viewport: { width: 1280, height: 720 }, // Browser viewport size
    screenshot: "only-on-failure", // Capture screenshots on failure
    video: "retain-on-failure", // Record video on test failure
  },

  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium" },
    },
    {
      name: "Firefox",
      use: { browserName: "firefox" },
    },
    {
      name: "WebKit",
      use: { browserName: "webkit" },
    },
  ],
});
