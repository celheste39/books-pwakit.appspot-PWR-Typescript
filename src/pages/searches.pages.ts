import { type Page } from "@playwright/test";
import { type PageElements } from "../interfaces/page-elements.interfaces";
import {getHomeLandingPageLocators } from "../locators/books-landing.locators"

export default class ToLanding{
    elements: PageElements;
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
        this.elements = getHomeLandingPageLocators(page);
    }

    async searching(): Promise<void>{
        await this.elements.searchBar.fill("calculo integral");
        await this.elements.keyboard.press("Enter");
    }
}