// example.spec.js
const { test, expect } = require("@playwright/test");

test("PunchCard", async ({ page }) => {
  await page.goto(process.env.URL);
  console.log(process.env.URL)
  // Expect a title "to contain" a substring.
  await page.locator("#username").fill(process.env.USR);
  // await new Promise(r => setTimeout(r, 2000)); // hard wait for 2000ms
  await page.locator("#password").fill(process.env.PWD);

  await new Promise(r => setTimeout(r, 1000)); // hard wait for 2000ms
  await page.click("text=Log in");

  var d = new Date();

  if (d.getHours() < 12) {
    await page.click("text=Sign In");
  } else {
    await page.click("text=Sign Out");
  }
});
