import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ManagerPage } from '../pages/ManagerPage';
import {userData } from '../../utils/testData';
import { existingCustomer } from '../../utils/testData';



test('Verify manager add customer, view and delete', async ({ page }) => {
    const login = new LoginPage(page);
    const manager = new ManagerPage(page);


    await login.goto();
    await login.loginAsManager();


    for (const data of userData) {
        await manager.addCustomer(data.firstname, data.lastname, data.postcode);
    }


    await manager.openCustomersTab();


    for (const data of userData) {
        await manager.searchCustomer(data.lastname);
        await manager.verifyCustomerExists(data.firstname, data.lastname, data.postcode);
    }


    await manager.deleteCustomer('Jackson', 'Connely', 'L789C349');
    await manager.deleteCustomer('Noah', 'Jay', 'L789C349');

    //Verify if the existingcustomer only remains
    for (const data of existingCustomer) {
        await manager.searchCustomer(data.lastname);
        await manager.verifyCustomerExists(data.firstname, data.lastname, data.postcode);
    }



});

