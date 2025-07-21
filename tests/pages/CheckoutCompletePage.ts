import { Page, Locator } from '@playwright/test';

export class CheckoutCompletePage {
  readonly page: Page;
  readonly completeHeader: Locator;
  readonly completeText: Locator;
  readonly backHomeButton: Locator;
  readonly ponyExpressImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.completeHeader = page.locator('[data-test="complete-header"]');
    this.completeText = page.locator('[data-test="complete-text"]');
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
    this.ponyExpressImage = page.locator('.pony_express');
  }

  async getSuccessMessage(): Promise<string | null> {
    return await this.completeHeader.textContent();
  }

  async getCompleteText(): Promise<string | null> {
    return await this.completeText.textContent();
  }

  async goBackHome() {
    await this.backHomeButton.click();
  }

  async isOnCompletePage(): Promise<boolean> {
    return this.page.url().includes('checkout-complete.html');
  }

  async isPonyExpressImageVisible(): Promise<boolean> {
    return await this.ponyExpressImage.isVisible();
  }
}