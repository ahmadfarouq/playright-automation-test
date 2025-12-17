# Playwright E2E Tests

This repository contains end-to-end (E2E) UI tests written with [Playwright](https://playwright.dev/).

## Requirements

- Node.js 18+ (recommended)
- npm (comes with Node.js)

Check versions:
```bash
node -v
npm -v

```
# Technology Stack
| Category              | 	Technology             |
|-----------------------|-------------------------|
| Programming Language	 | TypeScript              |
| Test Framework	       | Playwright Test         |
| Automation Type       |	End-to-End (UI) Testing |
|Browser Automation|	Chromium, Firefox, WebKit|
|Test Runner|	Playwright Test Runner|
|Reporting|	Playwright HTML Reporter|
|CI (Planned)|	GitHub Actions|

## Setup
1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-directory>
``` 
2. Install dependencies:
```bash
npm install
```
3. Install Playwright browsers:
```bash
npx playwright install
```
## Running Tests
To run all tests:
```bash
npx playwright test
```
To run a specific test file:
```bash
npx playwright test path/to/test-file.spec.ts
```
To run tests in headed mode (with browser UI):
```bash
npx playwright test --headed
```
To run tests in a specific browser (chromium, firefox, webkit):
```bash
npx playwright test --project=chromium
```
## Test Reports
After running tests, generate an HTML report with:
```bash
npx playwright show-report
```
This will open the report in your default web browser. 

## Project Structure
```
/ ├── tests/                            # Test files
    ├── e2e/                            # End-to-end test cases
        ├── customer-execute.spec.ts
        ├── manager-execute.spec.ts
    ├── pages/                          # Page Object Models
        ├── BasePage.ts
        ├── CustomerPage.ts
        ├── ManagerPage.ts
├── utils/                             # TestData and utility functions
    ├── testData.ts    
├── playwright.config.ts                # Playwright configuration file
├── package.json                        # npm package file
├── tsconfig.json                       # TypeScript configuration file
``` 
## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes. 
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details