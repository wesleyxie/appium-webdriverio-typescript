
const {Given, When, Then} = require('cucumber');
import {expect} from 'chai';
import { CalculatorPageObject } from '../pages/calcPage';

import {HomePageObject} from '../pages/homePage';
import {LoginPageObject} from '../pages/loginPage';
import {WelcomePageObject} from '../pages/welcomePage';

const welcomePage: WelcomePageObject = new WelcomePageObject();
const loginPage: LoginPageObject = new LoginPageObject();
const homePage: HomePageObject = new HomePageObject();

Given(/^I am on login page$/, () => {
  welcomePage.getScreenRoot().waitForDisplayed(5000);
  welcomePage.getLoginButton().click();
  loginPage.getScreenRoot().waitForDisplayed(2000);
});

When (/^I put "(.*?)" as username and "(.*?)" as password$/, (username: string, password: string) => {
  loginPage.getUsernameInput().setValue(username);
  loginPage.getPasswordInput().setValue(password);
  loginPage.getLoginButton().click();
  browser.pause(5000);
});
