import { test, expect } from '@playwright/test';
import {
  LoginPage,
  InventoryPage,
  CartPage,
  CheckoutPage,
  CheckoutCompletePage
} from './pages';

test.describe('Sauce Demo E2E Test', () => {
  test('Complete shopping flow from login to order confirmation', async ({ page }) => {
    // Initialize page objects
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);

    // Navigate to Sauce Demo
    await loginPage.goto();

    // Verify page loaded correctly
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    // Login with provided credentials
    await loginPage.login('standard_user', 'secret_sauce');
    
    // Verify we're on the inventory page
    await expect(page).toHaveURL(/inventory.html/);

    // Select a random item (Sauce Labs Backpack) and add to cart
    await inventoryPage.addItemToCart('sauce-labs-backpack');
    
    // Verify item was added to cart (cart badge should show 1)
    const cartCount = await inventoryPage.getCartItemCount();
    expect(cartCount).toBe('1');

    // Verify the item is marked as added (button changed to Remove)
    const isItemInCart = await inventoryPage.isItemInCart('sauce-labs-backpack');
    expect(isItemInCart).toBe(true);

    // Go to cart
    await inventoryPage.goToCart();
    await expect(page).toHaveURL(/cart.html/);

    // Verify cart is not empty
    const isCartEmpty = await cartPage.isCartEmpty();
    expect(isCartEmpty).toBe(false);

    // Store item details for validation
    const itemName = await cartPage.getItemName();
    const itemDescription = await cartPage.getItemDescription(itemName!);
    const cartQuantity = await cartPage.getItemQuantity(itemName!);
    const itemPrice = await cartPage.getItemPrice();

    // Verify cart contents
    expect(itemName).toBe('Sauce Labs Backpack');
    expect(cartQuantity).toBe('1');
    expect(itemDescription).toContain('carry.allTheThings()');
    expect(itemPrice).toBe('$29.99');

    // Proceed to checkout
    await cartPage.checkout();
    await expect(page).toHaveURL(/checkout-step-one.html/);

    // Fill random personal information
    await checkoutPage.fillPersonalInfo('John', 'Doe', '12345');
    await checkoutPage.continue();

    // Verify we're on checkout overview page
    await expect(page).toHaveURL(/checkout-step-two.html/);

    // Validate quantity and description are correct on overview page
    const overviewQuantity = await checkoutPage.getOrderItemQuantity();
    const overviewDescription = await checkoutPage.getOrderItemDescription();
    const overviewItemName = await checkoutPage.getOrderItemName();
    const overviewItemPrice = await checkoutPage.getOrderItemPrice();

    expect(overviewQuantity).toBe('1');
    expect(overviewItemName).toBe('Sauce Labs Backpack');
    expect(overviewDescription).toContain('carry.allTheThings()');
    expect(overviewItemPrice).toBe('$29.99');

    // Verify order summary details
    const subtotal = await checkoutPage.getSubtotal();
    const tax = await checkoutPage.getTax();
    const total = await checkoutPage.getTotal();

    expect(subtotal).toContain('$29.99');
    expect(tax).toContain('$2.40');
    expect(total).toContain('$32.39');

    // Finish the order
    await checkoutPage.finish();

    // Validate success page
    await expect(checkoutCompletePage.isOnCompletePage()).resolves.toBe(true);
    await expect(page).toHaveURL(/checkout-complete.html/);
    
    // Validate 'Thank you for your order!' message appears
    const successMessage = await checkoutCompletePage.getSuccessMessage();
    expect(successMessage).toBe('Thank you for your order!');

    // Verify complete text is present
    const completeText = await checkoutCompletePage.getCompleteText();
    expect(completeText).toContain('dispatched');

    // Verify Pony Express image is visible
    const isPonyImageVisible = await checkoutCompletePage.isPonyExpressImageVisible();
    expect(isPonyImageVisible).toBe(true);
  });

  test('Login with invalid credentials should show error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('invalid_user', 'wrong_password');

    // Should stay on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('Add multiple items to cart and verify count', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // Add multiple items
    await inventoryPage.addItemToCart('sauce-labs-backpack');
    await inventoryPage.addItemToCart('sauce-labs-bike-light');

    // Verify cart count shows 2
    const cartCount = await inventoryPage.getCartItemCount();
    expect(cartCount).toBe('2');
  });
});
