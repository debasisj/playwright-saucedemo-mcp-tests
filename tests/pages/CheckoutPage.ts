import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly cancelButton: Locator;
  readonly finishButton: Locator;
  readonly cartItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.cancelButton = page.locator('[data-test="cancel"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.cartItems = page.locator('.cart_item');
  }

  async fillPersonalInfo(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continue() {
    await this.continueButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }

  async getOrderItemQuantity(): Promise<string | null> {
    return await this.page.locator('.cart_quantity').first().textContent();
  }

  async getOrderItemDescription(): Promise<string | null> {
    return await this.page.locator('.inventory_item_desc').first().textContent();
  }

  async getOrderItemName(): Promise<string | null> {
    return await this.page.locator('.inventory_item_name').first().textContent();
  }

  async getOrderItemPrice(): Promise<string | null> {
    return await this.page.locator('.inventory_item_price').first().textContent();
  }

  async getSubtotal(): Promise<string | null> {
    return await this.page.locator('.summary_subtotal_label').textContent();
  }

  async getTax(): Promise<string | null> {
    return await this.page.locator('.summary_tax_label').textContent();
  }

  async getTotal(): Promise<string | null> {
    return await this.page.locator('.summary_total_label').textContent();
  }

  async getPaymentInfo(): Promise<string | null> {
    return await this.page.locator('.summary_value_label').first().textContent();
  }

  async getShippingInfo(): Promise<string | null> {
    return await this.page.locator('.summary_value_label').last().textContent();
  }

  async getErrorMessage(): Promise<string | null> {
    const errorElement = this.page.locator('[data-test="error"]');
    return await errorElement.textContent();
  }
}