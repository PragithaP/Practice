import {test,expect,Locator} from "@playwright/test";


test.skip("practice",async({page})=>{

  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  //await page.getByRole("radio").filter({hasText:"radio3"}).click();
  await page.locator('label').filter({ hasText: 'Radio2' }).getByRole('radio').check();

 // await page.locator("#dropdown-class-example").selectOption({label:'Option2'});

  const options = await page.locator("//*[@id='dropdown-class-example']/option").all();

  console.log(options.length);
for(let op of options){

  console.log(await op.textContent())
  let val=await op.textContent();
  if( val==="Option3"){
    await page.selectOption("//*[@id='dropdown-class-example']",{label:val})

      }
}

 // options.filter({hasText:'option3'}).click();

// await page.selectOption("#dropdown-class-example",{label:"Option1"});

})

test("p02",async({page})=>{
//  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
// const th=await  page.locator("//table[@id='product' and @name='courses']//tr/th").all();
// console.log( th.length)

await page.goto("https://www.amazon.in/");
await page.getByText("Account & Lists").hover();
await page.mouse.wheel(0,300);
await page.keyboard.press("Control+A");



})


test.skip('Test1',async({page})=>{

const student = {
  firstName: "Pragitha",
  age: 29
};

let loc="Bangalore";

for (let key in student) {
  console.log(student[key as keyof typeof student]);
}

console.log(`I am in ${loc}`);
console.log("I am in "+loc);

console.log(loc.slice(3,5));
console.log(loc);

let arr=[3,5,6,8];
let sl=arr.slice(2,3);
let s2=arr.splice(0,2);

// console.log(sl);
// console.log(s2);
// console.log();
const numbers = [10, 20, 30, 40, 50];
const result = numbers.reduce((total, num) => total + num, 0);

console.log(result);

const n=[12,14,10,18,5];
console.log(n.splice(1,0,13));
console.log(n);

const sum=(a:any,b:any)=>{
  console.log(a+b);
}
//sum(2,10);


})