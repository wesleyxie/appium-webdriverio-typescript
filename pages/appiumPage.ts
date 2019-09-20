/**
 * Page Objects help in better re-usablitity and maintenance of element locators.
 * This file exports GooglePageObject & AppiumPageObject classes
 */

class GooglePageObject {
    public get searchTextBox(): any { return browser.$('input[type="search"]'); }
    public get searchButton(): any { return browser.$('button[aria-label="Google Search"]'); }
    public get results(): any { return browser.$('#ires #rso').waitForDisplayed(5000); }
    public get firstLink(): any { return browser.$('#rso > div:nth-child(1) > div > div > div > div:nth-child(1) > div > a'); }
}

class AppiumPageObject {
    public get linkButton(): any { return browser.$('body > nav.navbar.navbar-inverse.navbar-static-top button'); }
    public get tutorialLink(): any { return browser.$('#bs-example-navbar-collapse-1 > ul > li:nth-child(7) > a'); }
    public get firstBook(): any { return browser.$('#readmeMarkdown > div:nth-child(1) > a.resource-title'); }
    public get androidTutorialTitle(): any { return browser.$('#native-android-automation').getText(); }
}

/*
Public Interface - export instances of classes
**/
export const GooglePage = new GooglePageObject();
export const AppiumPage = new AppiumPageObject();
