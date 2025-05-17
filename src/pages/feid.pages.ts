import { expect, type Page } from "@playwright/test";
import dotenv from "dotenv";
import { type PageElements } from "../interfaces/page-elements.interfaces";
import {getHomeLandingPageLocators } from "../locators/books-landing.locators"

dotenv.config();

const{
    FEID = "",
    YT_URL = "",
}= process.env;

export default class ToFeidChannel{
    elements: PageElements;
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
        this.elements = getHomeLandingPageLocators(page);
    }

    async BrowsingFeidChannel(): Promise<void>{
        await this.page.goto(YT_URL);
        

    }
}

