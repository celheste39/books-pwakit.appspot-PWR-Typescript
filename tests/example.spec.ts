import { test, expect, chromium } from '@playwright/test';
import { type PageElements } from '../src/interfaces/page-elements.interfaces';
import SearchesPage from "../src/pages/searches.pages";

/*if(shadow){
      await shadow.selectOption({
        label: "Issues to verify"
      })
    }else throw new Error("Element not found")*/

test.describe("Hacer busqueda de libro y seleccionar de la lista aleatoriamente", () =>{
  let element: PageElements;
  
  test('primer test', async ({ page }) => {
    const searchesPage = new SearchesPage(page);
    const shadow = await page.$("#input");
    const randomiz = Math.random();
    await page.goto("https://books-pwakit.appspot.com/");
    await page.fill("#input", "calculo integral");
    await page.keyboard.press("Enter");
    await page.locator("#/detail/["+ randomiz +"]");
    //await expect(page.getByTestId('#title')).toHaveText('Cálculo integral');
    await page.fill("#input", "calculo diferencial");
    await page.keyboard.press("Enter");
    await page.locator("#/detail/["+ randomiz +"]");
    await page.fill("#input", "calculo Ventorial");
    await page.keyboard.press("Enter");
    await page.locator("#/detail/["+ randomiz +"]");


  });
})
