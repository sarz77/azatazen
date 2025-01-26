import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  async clickLoginButton() {
    await this.page.click('text="Login"');
  }

  async enterCredentials(username: string, password: string) {
    await this.page.fill("#username", username);
    await this.page.fill("#password", password);
  }

  async submitLogin() {
    await this.page.click('text="Submit"');
  }
}
