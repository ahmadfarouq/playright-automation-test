import { expect, Page } from '@playwright/test';
import {before} from "node:test";


export class CustomerPage {
    constructor(private page: Page) {}


    async selectAccount(index = 2) {
        await this.page.locator('select[ng-model="accountNo"]').selectOption({ index });
    }

    private balanceValue() {

        return this.page.locator('div.center strong.ng-binding').nth(1);
    }

    async getBalance(): Promise<number> {

        const text = await this.page.locator('div.center strong.ng-binding').nth(1).textContent();
        return Number((text ?? '').replace(/[^\d.-]/g, ''));
    }

    async expectBalance(expected: number, timeout = 3000) {

        await expect.poll(() => this.getBalance(), { timeout }).toBe(expected);
    }

    private amountInput(): Locator {

        return this.page.locator('input[ng-model="amount"]');
    }

    private submitButton(): Locator {

        return this.page.locator('form button[type="submit"]');
    }

    private async switchMode(mode: Mode) {

        if (mode === 'deposit') {
            await this.page.getByRole('button', { name: /^Deposit$/i }).click();
            await expect(this.page.getByText(/Amount to be Deposited/i)).toBeVisible({ timeout: 30000 });
            await expect(this.submitButton()).toHaveText(/Deposit/i, { timeout: 30000 });
        } else {
            await this.page.getByRole('button', { name: /^Withdrawl$/i }).click();
            await expect(this.page.getByText(/Amount to be Withdrawn/i)).toBeVisible({ timeout: 30000 });
            await expect(this.submitButton()).toHaveText(/Withdraw/i, { timeout: 30000 });
        }

        await expect(this.amountInput()).toBeVisible({ timeout: 30000 });
    }


    async withdraw(amount: number) {

        await this.switchMode('withdraw');
        await this.amountInput().fill(String(amount));
        await this.submitButton().click();
    }

    async deposit(amount: number) {

        await this.switchMode('deposit');
        await this.amountInput().fill(String(amount));
        await this.submitButton().click();
    }

























}