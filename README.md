# Sauce Demo E2E Tests with Playwright

This project contains end-to-end tests for the [Sauce Demo](https://www.saucedemo.com/) website using Playwright with TypeScript and the Page Object Model (POM) pattern.

## 🚀 Features

- **Page Object Model (POM)** - Organized, maintainable test structure
- **TypeScript** - Type safety and better IDE support
- **Playwright** - Modern, fast, and reliable browser automation
- **Multiple Test Scenarios** - Complete shopping flow, error handling, and edge cases
- **Cross-browser Testing** - Chromium support (easily extensible)
- **Detailed Reporting** - HTML reports with screenshots and traces

## 🤖 AI-Powered Development

This complete project was developed using cutting-edge AI assistance, showcasing the power of modern AI tools in software development:

### 🎭 **Playwright MCP Server**
- **Real Website Exploration**: Used Playwright MCP (Model Context Protocol) server tools to interact with the actual Sauce Demo website
- **Live Browser Automation**: Performed real-time navigation, clicking, typing, and form filling on https://www.saucedemo.com/
- **Dynamic Element Discovery**: Captured page snapshots and identified UI elements through actual browser interaction
- **Authentic Test Scenarios**: Generated test cases based on real website behavior, not assumptions

### 🧠 **GitHub Copilot (Agent Mode)**
- **File System Operations**: Created and edited all project files using Copilot's file editing capabilities
- **Project Structure Setup**: Automatically generated the complete Page Object Model architecture
- **Configuration Management**: Set up TypeScript, Playwright config, and package.json with proper dependencies
- **Error Resolution**: Fixed TypeScript compilation errors and dependency issues

### 🎯 **Claude AI Integration**
- **Test Strategy Design**: Collaborated with Claude to design comprehensive test scenarios
- **Code Architecture**: Developed the Page Object Model structure with proper separation of concerns
- **Documentation Creation**: Generated comprehensive README and inline code documentation
- **Best Practices**: Ensured adherence to Playwright and TypeScript best practices

### 🔄 **Development Workflow**
1. **Exploration Phase**: Used Playwright MCP to navigate and understand the target website
2. **Design Phase**: Designed Page Object Model structure based on actual website elements
3. **Implementation Phase**: Created all files and code using AI file editing capabilities
4. **Validation Phase**: Verified functionality and fixed issues through AI-assisted debugging
5. **Documentation Phase**: Generated comprehensive documentation and setup instructions

### 💡 **Key Benefits of AI-Assisted Development**
- ✅ **Faster Development**: Complete project setup in minutes, not hours
- ✅ **Real-World Accuracy**: Tests based on actual website interaction, not guesswork
- ✅ **Best Practices**: AI ensures modern patterns and configurations
- ✅ **Comprehensive Coverage**: Full test scenarios including edge cases
- ✅ **Zero Manual Browser Testing**: All exploration done through MCP automation
- ✅ **Immediate Error Resolution**: AI identifies and fixes issues in real-time

## 📁 Project Structure

```
pw-mcp-claude/
├── tests/
│   ├── pages/                          # Page Object Model classes
│   │   ├── LoginPage.ts               # Login page interactions
│   │   ├── InventoryPage.ts           # Products/inventory page
│   │   ├── CartPage.ts                # Shopping cart page
│   │   ├── CheckoutPage.ts            # Checkout process pages
│   │   ├── CheckoutCompletePage.ts    # Order completion page
│   │   └── index.ts                   # Barrel exports
│   └── swag-mcp-mode-e2e.spec.ts     # Main test file
├── package.json                        # Dependencies and scripts
├── playwright.config.ts               # Playwright configuration
├── tsconfig.json                      # TypeScript configuration
└── README.md                          # This file
```

## 🛠️ Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/debasisj/playwright-saucedemo-mcp-tests.git
   cd playwright-saucedemo-mcp-tests
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## 🎯 Test Scenarios

### Main E2E Test: Complete Shopping Flow
- ✅ Navigate to Sauce Demo website
- ✅ Login with valid credentials (`standard_user` / `secret_sauce`)
- ✅ Add a random item (Sauce Labs Backpack) to cart
- ✅ Verify cart badge shows correct count
- ✅ Navigate to cart and validate item details
- ✅ Proceed to checkout
- ✅ Fill personal information (John Doe, 12345)
- ✅ Validate order summary (quantity, description, pricing)
- ✅ Complete the order
- ✅ Verify success message: \"Thank you for your order!\"

### Additional Test Cases
- ❌ **Invalid Login Test** - Verify error handling with wrong credentials
- 🛒 **Multiple Items Test** - Add multiple items and verify cart count

## 🚀 Running Tests

### Run all tests
```bash
npm test
```

### Run tests with browser UI (headed mode)
```bash
npm run test:headed
```

### Run tests in interactive UI mode
```bash
npm run test:ui
```

### Run tests in debug mode
```bash
npm run test:debug
```

### View test report
```bash
npm run report
```

## 📊 Page Object Model Classes

### 🔐 LoginPage
- Methods: `goto()`, `login()`, `getPageTitle()`
- Handles: Username/password input, login button interactions

### 🛍️ InventoryPage
- Methods: `addItemToCart()`, `goToCart()`, `getCartItemCount()`, `isItemInCart()`
- Handles: Product selection, cart navigation, cart badge verification

### 🛒 CartPage
- Methods: `getItemName()`, `getItemDescription()`, `checkout()`, `isCartEmpty()`
- Handles: Cart item validation, checkout navigation

### 📝 CheckoutPage
- Methods: `fillPersonalInfo()`, `continue()`, `finish()`, `getOrderItemDetails()`
- Handles: Checkout form filling, order summary validation

### ✅ CheckoutCompletePage
- Methods: `getSuccessMessage()`, `isOnCompletePage()`, `isPonyExpressImageVisible()`
- Handles: Order completion verification

## 🔧 Configuration

### Playwright Configuration (`playwright.config.ts`)
- **Base URL**: `https://www.saucedemo.com`
- **Test Directory**: `./tests`
- **Browser**: Chromium (Desktop Chrome)
- **Screenshots**: On failure only
- **Traces**: On first retry
- **Reporter**: HTML

### TypeScript Configuration (`tsconfig.json`)
- **Target**: ES2020
- **Module**: CommonJS
- **Strict**: Enabled
- **Node Types**: Included

## 📋 Test Results

The tests validate:
- ✅ Successful login flow
- ✅ Product addition to cart
- ✅ Cart item count accuracy
- ✅ Item details preservation (name, description, price)
- ✅ Checkout process completion
- ✅ Order summary accuracy (quantity: 1, price: $29.99, tax: $2.40, total: $32.39)
- ✅ Success message display
- ✅ Error handling for invalid credentials

## 🐛 Debugging

### Common Issues and Solutions

1. **Browser not installed:**
   ```bash
   npx playwright install chromium
   ```

2. **Test timeout:**
   - Increase timeout in `playwright.config.ts`
   - Check network connectivity

3. **Element not found:**
   - Verify selectors in page object classes
   - Check if website structure changed

### Debug Commands
```bash
# Run specific test file
npx playwright test tests/swag-mcp-mode-e2e.spec.ts

# Run with verbose output
npx playwright test --verbose

# Run single test in debug mode
npx playwright test --debug -g \"Complete shopping flow\"
```

## 📈 Extending Tests

### Adding New Page Objects
1. Create new page class in `tests/pages/`
2. Export it in `tests/pages/index.ts`
3. Import and use in test files

### Adding New Test Cases
1. Add new test methods in the spec file
2. Use existing page objects or create new ones
3. Follow the AAA pattern (Arrange, Act, Assert)

## 🤝 Contributing

1. Follow the existing Page Object Model structure
2. Add proper TypeScript types
3. Include descriptive test names and comments
4. Ensure tests are independent and can run in any order

## 📝 Development Notes

### 🎯 **AI-Driven Development Process**
- **100% AI-Generated**: This entire project was created through AI collaboration without manual coding
- **Playwright MCP Integration**: Used Model Context Protocol server tools for real browser automation during development
- **Live Website Testing**: All test scenarios were validated against the actual Sauce Demo website during creation
- **GitHub Copilot Agent Mode**: Leveraged advanced file editing and project setup capabilities
- **Claude AI Collaboration**: Combined strategic planning with technical implementation

### 🔍 **Technical Implementation Details**
- Page object methods are based on actual website exploration and interaction through MCP
- All selectors use data-test attributes where available for better stability and reliability
- Tests include comprehensive validation of the complete e-commerce flow from login to order completion
- Element locators were discovered through real-time browser interaction, not documentation
- Error handling and edge cases identified through actual website behavior analysis

### 🚀 **Innovation Highlights**
- **First-of-its-kind**: Demonstrates the potential of AI-assisted test automation development
- **MCP Browser Tools**: Showcases practical use of Model Context Protocol for web testing
- **Agent Collaboration**: Exhibits seamless collaboration between multiple AI systems
- **Zero Manual Testing**: Complete test suite created without human browser interaction

## 🛠️ AI Tools & Technologies Used

### 🎭 **Playwright MCP Server Tools**
```bash
# Examples of MCP tools used during development:
mcp_playwright_browser_navigate     # Navigate to website
mcp_playwright_browser_click        # Click elements
mcp_playwright_browser_type         # Fill forms
mcp_playwright_browser_snapshot     # Capture page state
mcp_playwright_browser_take_screenshot  # Visual verification
```

### 🤖 **GitHub Copilot (Agent Mode)**
```typescript
// File operations performed by Copilot:
create_file()           // Created all TypeScript files
replace_string_in_file() // Updated configurations
get_errors()            // Identified and fixed issues
run_in_terminal()       // Executed npm commands
```

### 🧠 **Claude AI Capabilities**
- Strategic test planning and scenario design
- Code architecture and best practices guidance
- Documentation creation and technical writing
- Problem-solving and debugging assistance

## 🔗 Useful Links

### 📚 **Project Documentation**
- [Playwright Documentation](https://playwright.dev/)
- [Sauce Demo Website](https://www.saucedemo.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)

### 🤖 **AI Tools & Technologies**
- [GitHub Copilot](https://github.com/features/copilot) - AI pair programmer
- [Claude AI](https://www.anthropic.com/claude) - Advanced AI assistant
- [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol) - AI tool integration framework
- [Playwright MCP Server](https://github.com/microsoft/playwright) - Browser automation through MCP

### 🎯 **Related Resources**
- [AI-Assisted Development Best Practices](https://docs.github.com/en/copilot)
- [Test Automation with AI](https://playwright.dev/docs/test-automation)
- [Modern E2E Testing Patterns](https://playwright.dev/docs/best-practices)