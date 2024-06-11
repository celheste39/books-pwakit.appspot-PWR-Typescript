import { type Page } from "@playwright/test";
import { type PageElements } from "../interfaces/page-elements.interfaces";

export function getHomeLandingPageLocators(page: Page): PageElements{
    return {
        searchBar: page.locator("#input"),
        
    }
}