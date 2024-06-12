import { type Page } from "@playwright/test";
import dotenv from "dotenv";
import { type PageElements } from "../interfaces/page-elements.interfaces";
import {getHomeLandingPageLocators } from "../locators/books-landing.locators"

dotenv.config();

const{
    MAIN_URL = "",
    BUSQ_1 = "",
    BUSQ_2 = "",
    BUSQ_3 = "",
} = process.env;

export default class ToLanding{
    elements: PageElements;
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
        this.elements = getHomeLandingPageLocators(page);
    }

    async Searching(): Promise<void>{
        await this.page.goto(MAIN_URL);
        await this.elements.searchBar.fill(BUSQ_1);
        await this.page.keyboard.press("Enter");
        await this.elements.lib1.click();
        await this.elements.searchBar.fill(BUSQ_2);
        await this.page.keyboard.press("Enter");
        await this.elements.lib2.click();
        await this.elements.searchBar.fill(BUSQ_3);
        await this.page.keyboard.press("Enter");
        await this.elements.lib3.click();
    }
}