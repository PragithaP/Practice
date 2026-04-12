import {test,expect,Locator} from "@playwright/test";

test('Test1',async({page})=>{

    await page.goto("https://demo.nopcommerce.com/");
    const logo:Locator=page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();
    // console.log(logo.isDisabled);
    await expect(page.getByText("Welcome to our store")).toBeVisible();
})