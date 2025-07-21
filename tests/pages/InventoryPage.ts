import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;
  readonly productsTitle: Locator;
  readonly inventoryItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.productsTitle = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
  }

  async addItemToCart(itemName: string) {
    const dataTestId = itemName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
    const addToCartButton = this.page.locator(`[data-test="add-to-cart-${dataTestId}"]`);
    await addToCartButton.click();
  }

  async removeItemFromCart(itemName: string) {
    const dataTestId = itemName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
    const removeButton = this.page.locator(`[data-test="remove-${dataTestId}"]`);
    await removeButton.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async getCartItemCount(): Promise<string | null> {
    try {
      return await this.cartBadge.textContent();
    } catch {
      return null; // Cart is empty
    }
  }

  async getProductNames(): Promise<string[]> {
    const names = await this.page.locator('.inventory_item_name').allTextContents();
    return names;
  }

  async getProductPrice(itemName: string): Promise<string | null> {
    const item = this.inventoryItems.filter({ hasText: itemName });
    return await item.locator('.inventory_item_price').textContent();
  }

  async isItemInCart(itemName: string): Promise<boolean> {
    const dataTestId = itemName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
    const removeButton = this.page.locator(`[data-test="remove-${dataTestId}"]`);
    return await removeButton.isVisible();
  }
}