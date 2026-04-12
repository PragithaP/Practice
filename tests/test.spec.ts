import {expect,test,Locator,request, chromium, Page} from "@playwright/test";
//import { beforeEach, skip } from "node:test";

//let page:any;
test.skip('sdf',()=>{
  
test.beforeEach("Launch",async({page})=>{
 //  page = await browser.newPage();
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
})
}
)

 

test('test01',async({page})=>{

    console.log(page.url());
    const title:string=await page.title();
    console.log(title);
 await expect(page).toHaveURL("https://rahulshettyacademy.com/AutomationPractice/");


})

test('test02',async({page})=>{  

  const radio:Locator[]= await page.locator("//*[@id='radio-btn-example']//label/input").all();
  // console.log(await radio); 
  for(let r of radio){
     const val=await r.getAttribute("value"); 
    if(val==="radio2"){
     
      await r.click();
    }

  }



//await page.getByRole('radiogroup',{name:'Radio2'}).click();

 //   await page.getByRole('checkbox').last().check();
   // await page.getByRole("radio",{name:"Radio3"}).check();

   // await page.locator("//*[@id='radio-btn-example']//label/input").last().click();

})


  test('test03',async({page})=>{
    const link:Locator= page.getByText("Broken Link");
   // await link.click();
    
    const url:any=await link.getAttribute('href');
   const response= await page.request.get(url);
   console.log(response.status());
    
    



    console.log("done");
 //   await page.screenshot({ path: 'screenshot.png', fullPage: true })
  })


  test('test04',async()=>{

    const browser=await chromium.launch();
  const context = await browser.newContext();
 const page=await context.newPage();

await page.goto("https://www.makemytrip.com/home");
await page.goto("https://www.makemytrip.com");

await page.locator("//*[@data-cy='closeModal']").click();
await page.locator("//*[@class='tp-dt-header-icon']/img[@alt='minimize']").click();

await page.getByText("//*[@data-cy='menu_Flights']").isVisible();
await page.keyboard.press('Escape');
await page.locator("//*[@for='fromCity']//input").fill("Ban");

const city:Locator[]=await page.locator("//*[@role='listbox']//span[@class='revampedCityName']").all();

for(const c of city){
  const s=await c.textContent();
if(s?.includes("Bangkok")){
  await c.click();
}
}

  })

   test.only('test05',async()=>{
  const browser=await chromium.launch();
  const context = await browser.newContext();
 const page=await context.newPage();
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

const pagePromise=context.waitForEvent('page');
await page.getByText("Open Window").click();
const newPage=await pagePromise;
console.log(await newPage.title());
console.log(await page.title());

 })

