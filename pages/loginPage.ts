import { expect, Locator,Page } from "@playwright/test";

export class LoginPage{
   
    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly submit:Locator;

      constructor(page:Page){
        this.page=page;
        this.username=page.locator("//input[@name='username']");
        this.password=page.locator("//input[@name='password']");
        this.submit=page.locator("//button[@type='submit']");
    }

    async launch(){
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
   
    async login(username:string,password:string){
      
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submit.click();
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
        
    }


}