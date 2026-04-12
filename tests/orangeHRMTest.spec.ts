import { expect,test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
//import { before } from "node:test";
import data from "../testData/data.json";

let loginPage:LoginPage;

test.beforeAll(async()=>{

    //loginPage.launch();
})

test('Login',async({page})=>{


    const loginPage=new LoginPage(page);
   await loginPage.login(data.username,data.password);


})