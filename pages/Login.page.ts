import { Page } from "@playwright/test";

export class Login {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    this.page.goto('/');
  }

  async login(username, password): Promise<void> {
    await this.page.type('#user-name', username);
    await this.page.type('#password', password);
    await this.page.click('#login-button');
  }
}