/**
 * Step Definitons are the glue code which drive
 * the feature scenarios, Cucumber helps us provide
 * gherkin language syntax's - Given, When, Then
 */

const {Given, When, Then} = require('cucumber');
import {expect} from 'chai';
import {CalculatorPageObject} from '../pages/calcPage';

const calc: CalculatorPageObject = new CalculatorPageObject();

Given(/^I am on my mobile calculator app$/, () => {
    const title = browser.$('android.widget.TextView').getText();
    expect(title).to.equal('Calculator');
});

When(/^I add "(.*?)" and "(.*?)"$/,  (num1: string, num2: string) => {
    browser.touchClick(calc.calcDigitSelector(num1));
    browser.touchClick(calc.addOperator);
    browser.touchClick(calc.calcDigitSelector(num2));
    browser.touchClick(calc.equalOperator);
});

When(/^I subtract "(.*?)" from "(.*?)"$/,  (num1: string, num2: string) => {
    browser.touchClick(calc.calcDigitSelector(num1));
    browser.touchClick(calc.subtractOperator);
    browser.touchClick(calc.calcDigitSelector(num2));
    browser.touchClick(calc.equalOperator);
});

When(/^I multiply "(.*?)" with "(.*?)"$/,  (num1: string, num2: string) => {
    browser.touchClick(calc.calcDigitSelector(num1));
    browser.touchClick(calc.multiplyOperator);
    browser.touchClick(calc.calcDigitSelector(num2));
    browser.touchClick(calc.equalOperator);
});

When(/^I divide "(.*?)" with "(.*?)"$/,  (num1: string, num2: string) => {
    browser.touchClick(calc.calcDigitSelector(num1));
    browser.touchClick(calc.divisionOperator);
    browser.touchClick(calc.calcDigitSelector(num2));
    browser.touchClick(calc.equalOperator);
});

When(/^I click on AC button$/, () => {
    browser.touchClick(calc.clearOperator);
});

Then(/^the result "(.*?)" should be displayed$/, (result: string) => {
    return expect(browser.$(calc.outputText).getText()).to.contain(result);
});

Then(/^the result should be cleared$/, () => {
    return expect(browser.$(calc.outputText).getText()).to.equal('');
});
