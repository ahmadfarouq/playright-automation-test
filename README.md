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
git clone https://github.com/ahmadfarouq/playright-automation-test.git
cd playright-automation-test
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
Playwright generates an HTML report after execution.

### Report location(generated after running tests)
```bash
./playwright-report/index.html
```
### View the report locally
After running the tests, execute:
```bash
npx playwright show-report 

```
This will open the report in your default web browser. 

## Project Structure
```
/ ├── tests/                               # Test files
    ├── e2e/                               # End-to-end test cases
        ├── Q2/                            # End-to-end test cases
            ├── manager-execute.spec.ts
        ├── Q3/                            # End-to-end test cases
            ├── customer-execute.spec.ts
        
├── pages/                                 # Page Object Models
    ├── LoginPage.ts
    ├── CustomerPage.ts
    ├── ManagerPage.ts
├── utils/                                 # TestData and utility functions
    ├── testData.ts    
├── playwright.config.ts                   # Playwright configuration file
├── package.json                           # npm package file
├── tsconfig.json                          # TypeScript configuration file

``` 
## GitHub Actions (CI Pipeline)

This project includes a GitHub Actions workflow that runs Playwright tests automatically.

### When it runs
- Automatically on **push to `main`**
- Manually via **Actions → Playwright Test Automation → Run workflow**

### How to view pipeline runs
1. Go to your repository in GitHub
2. Click the **Actions** tab
3. Select **Playwright Test Automation**
4. Click the latest workflow run to view logs and step status

### How to download and view the Playwright HTML report
1. Open the workflow run in the **Actions** tab
2. Scroll to **Artifacts**
3. Download **playwright-report**
4. Unzip it locally
5. Open:
   `playwright-report/index.html`

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes. 
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details