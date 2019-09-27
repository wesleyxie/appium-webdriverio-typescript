
const {Given, When, Then} = require('cucumber');
import {expect} from 'chai';

Given(/^I am on login page$/, () => {
  browser.pause(5000);
  console.log(browser.getPageSource());

  $('~login-root').waitForDisplayed(5000);

  // const title = $('~login-root').getText();
  // console.log(title);
});
