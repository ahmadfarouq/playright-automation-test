import { Page, expect } from '@playwright/test';


export class ManagerPage {
    constructor(private page: Page) {}


    async addCustomer(firstname: string, lastname: string, postcode: string) {

        await this.page.locator('button.btn.tab', {hasText: 'Add Customer'}).click();
        //await this.page.getByRole('button', {name: 'Add Customer'}).click();
        await this.page.locator('input[ng-model="fName"]').fill(firstname);
        await this.page.locator('input[ng-model="lName"]').fill(lastname);
        await this.page.locator('input[ng-model="postCd"]').fill(postcode);

        this.page.once('dialog', d => d.accept());

        //Click SUBMIT button inside form
        await this.page
            .getByRole('form')
            .getByRole('button', { name: 'Add Customer'})
            .click();

    }


    async openCustomersTab() {
        await this.page.getByRole('button', { name: 'Customers' }).click();
    }


    async searchCustomer(lastname: string) {

        await this.page.locator('input[placeholder="Search Customer"]').fill(lastname);
    }


    async verifyCustomerExists(firstname: string, lastname: string, postcode: string) {
        const row = this.page.locator('tbody tr');

        await expect(row).toHaveCount(1);
        await expect(row).toContainText(firstname);
        await expect(row).toContainText(lastname);
        await expect(row).toContainText(postcode);
    }


    async deleteCustomer(firstname: string, lastname: string, postcode:string) {
        await this.searchCustomer(lastname);

        const row = this.page.locator('tbody tr');

        await expect(row).toHaveCount(1);
        await expect(row).toContainText(firstname);
        await expect(row).toContainText(lastname);
        await expect(row).toContainText(postcode);


        await this.page.getByRole('button', { name: 'Delete' }).click();
    }

}