import { Page, Locator } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;

    //Locators
  }

  async navigate(path: string): Promise<void> {
    await this.page.goto(path);
  }
}
