import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { CustomerPage } from '../../../pages/CustomerPage';



test('Customer balance updates after deposits', async ({ page }) => {
    const login = new LoginPage(page);
    const customer = new CustomerPage(page);


    await login.goto();
    await login.loginAsCustomer('Hermoine Granger');


    await customer.selectAccount();
    //await customer.verifyBalance(0);

    //let expected = 0;
    let expected = await customer.getBalance();

    await customer.deposit(50000);
    expected += 50000;
    await customer.expectBalance(expected);

    await customer.withdraw(3000);
    expected -= 3000;
    await customer.expectBalance(expected);

    await customer.withdraw(2000);
    expected -= 2000;
    await customer.expectBalance(expected);

    await customer.deposit(5000);
    expected += 5000;
    await customer.expectBalance(expected);

    await customer.withdraw(10000);
    expected -= 10000;
    await customer.expectBalance(expected);

    await customer.withdraw(15000);
    expected -= 15000;
    await customer.expectBalance(expected);

    await customer.deposit(1500);
    expected += 1500;
    await customer.expectBalance(expected);

    //verify expectBalance at the end is the same as getBalance
    const finalBalance = await customer.getBalance();
    expect(finalBalance).toBe(expected);

});
