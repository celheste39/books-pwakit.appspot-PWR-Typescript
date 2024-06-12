import { test, expect, chromium, Browser } from '@playwright/test';
import { type PageElements } from '../src/interfaces/page-elements.interfaces';
import SearchesPage from "../src/pages/searches.pages";

const authFile = "auth/user.json";

test.describe("Hacer busqueda de libro y seleccionar de la lista aleatoriamente", () =>{
    
    test('primer test', async ({ page: Page }) => {
        const browser:Browser = await chromium.launch({headless: false});
        const context = await browser.newContext();
        const page = await context.newPage();
        const searchesPage = new SearchesPage(page);
        await searchesPage.Searching();
        await context.storageState({ path: authFile })
        await browser.close();
    });
})