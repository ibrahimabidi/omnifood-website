import { test } from "@playwright/test";

test("test browser", async ({ page }) => {
  // Set a longer timeout for this test
  test.setTimeout(600000); // 10 minutes in milliseconds

  // Navigate to the URL
  await page.goto("http://127.0.0.1:5500/");

  // Wait for a long time (e.g., 10 minutes)
  await page.waitForTimeout(600000); // 10 minutes

  // Continue with other actions if necessary
});
