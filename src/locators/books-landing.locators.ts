import { type Page } from "@playwright/test";
import { type PageElements } from "../interfaces/page-elements.interfaces";

export function getHomeLandingPageLocators(page: Page): PageElements{
    return {
        searchBar: page.getByLabel('Search Books'),
        lib1: page.getByRole('link', { name: 'Cálculo integral de una' }),
        lib2: page.getByRole('link', { name: 'Cálculo diferencial Cálculo' }).nth(1),
        lib3: page.getByRole('link', { name: 'Introducción al cálculo vectorial para el estudio de la física Introducción al' }),
        label1: page.getByRole('heading', { name: 'Cálculo integral de una' }),
        label2: page.getByRole('heading', { name: 'Cálculo diferencial' }),
        label3: page.getByRole('heading', { name: 'Introducción al cálculo' }),
        canalFeid: page.getByLabel('Feid', { exact: true }),
        videoFeid: page.getByText('HomeVideosShortsLiveReleasesPlaylistsPostsStore Search')

    }
}