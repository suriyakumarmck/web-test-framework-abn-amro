import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^ABN AMRO open accounts page is opened$/, async function (){
    await  browser.url("https://www.abnamro.nl/en/personal/payments/open-an-account/open-own-account.html")
    await browser.maximizeWindow()
    let agreeElement = await $('[id=aab-cookie-consent-agree]')
    await agreeElement.click()
} )

When(/^(.*) banking is selected$/, async function(bankingType:String) {
    let privateBankElement = await $('[name=P391-C2-C1-C0-C0-C1-F1]')
    await privateBankElement.click()
})

Then(/^personal banking options are visible$/, async function() {
    await browser.pause(10000)
    let optionElement = await $('//*[@value="Mezelf"]/span')
    let actualText = await optionElement.getText()
    chai.expect(actualText).to.equal("For myself")
})