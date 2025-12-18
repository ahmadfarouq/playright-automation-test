import {expect, Page} from '@playwright/test';


export class LoginPage {
    constructor(private page: Page) {}


    async goto() {
        await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    }


    async loginAsManager() {
        const managerBtn =  this.page.getByRole('button', {name: 'Bank Manager Login'});

        await expect(managerBtn).toBeVisible();
        await managerBtn.click();

        //wait for the tab button
        const addCustomerTab = this.page.locator(
            'button.btn.tab',
            { hasText: 'Add Customer'}
        );

        await expect(addCustomerTab).toBeVisible();

    }


    async loginAsCustomer(customerName: string) {
        await this.page.getByRole('button', { name: 'Customer Login' }).click();
        await this.page.locator('select').selectOption({ label: customerName });
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
}