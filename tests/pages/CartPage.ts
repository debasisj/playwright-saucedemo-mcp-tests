import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly cartItems: Locator;
  readonly cartTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    this.cartItems = page.locator('.cart_item');
    this.cartTitle = page.locator('.title');
  }

  async getItemQuantity(itemName: string): Promise<string | null> {
    const cartItem = this.cartItems.filter({ hasText: itemName });
    return await cartItem.locator('.cart_quantity').textContent();
  }

  async getItemDescription(itemName: string): Promise<string | null> {
    const cartItem = this.cartItems.filter({ hasText: itemName });
    return await cartItem.locator('.inventory_item_desc').textContent();
  }

  async getItemName(): Promise<string | null> {
    return await this.page.locator('.inventory_item_name').first().textContent();
  }

  async getItemPrice(): Promise<string | null> {
    return await this.page.locator('.inventory_item_price').first().textContent();
  }

  async getAllItemNames(): Promise<string[]> {
    return await this.page.locator('.inventory_item_name').allTextContents();
  }

  async removeItem(itemName: string) {
    const cartItem = this.cartItems.filter({ hasText: itemName });
    await cartItem.locator('.btn_secondary').click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async getCartItemCount(): Promise<number> {
    return await this.cartItems.count();
  }

  async isCartEmpty(): Promise<boolean> {
    return (await this.getCartItemCount()) === 0;
  }
}