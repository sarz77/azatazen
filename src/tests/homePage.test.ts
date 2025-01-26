import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("Login with valid credentials", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate("/");
  await homePage.clickLoginButton();
  await homePage.enterCredentials("user", "password");
  await homePage.submitLogin();

  await expect(page).toHaveURL("/dashboard");
});
