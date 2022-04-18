import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
import reporter from "../../helper/reporter";
import constants  from "../../../data/constants.json";
import chooseBankAccountTab from "../../page-objects/choose_bank_account_tab"
import personalDetailsTab from "../../page-objects/personal_details_tab"
import identifyingTab from "../../page-objects/identifying_tab"
import closingQuestionsTab from "../../page-objects/closing_questions_tab"
import confirmTab from "../../page-objects/confirm_tab"



Given(/^ABN AMRO open accounts page is opened$/, async function (){
    await chooseBankAccountTab.navigateTochooseBankAccountTab(this.testid)
} )

When(/^user selects private banking to input valid address$/, async function() {

    await chooseBankAccountTab.selectPrivateBanking(this.testid)
    await chooseBankAccountTab.selectSelfAccount(this.testid)
    await chooseBankAccountTab.addAddressDetails(this.testid, constants.PRIVATE_ACCOUNT_DETAILS_VALID_DATA.ADDRESS)
    await chooseBankAccountTab.clickTellUsWhoYouAreButton(this.testid)
})

When(/^add identification information on identifying tab$/, async function() {
    await identifyingTab.fillIdentificationDetail(this.testid, constants.PRIVATE_ACCOUNT_DETAILS_VALID_DATA)
})

When(/^navigate to your details tab to enter user details$/, async function() {
    await personalDetailsTab.enterPersonaldetails(this.testid, constants.PRIVATE_ACCOUNT_DETAILS_VALID_DATA)
})

When(/^user answers closing questions$/, async function() {
    await closingQuestionsTab.answerClosingQuestions(this.testid)
})

Then(/^user validates the information collected$/, async function() {
    await confirmTab.validatePersonDetails(this.testid, constants.PRIVATE_ACCOUNT_DETAILS_VALID_DATA)
})

Then(/^personal account creation request is successful$/, async function() {
    await confirmTab.validateSubmitSuccessfully(this.testid)
})


When(/^user inputs invalid postalcode (.*)$/, async function(postalCode) {
    await chooseBankAccountTab.selectPrivateBanking(this.testid)
    await chooseBankAccountTab.selectSelfAccount(this.testid)
    await chooseBankAccountTab.enterPostalCode(this.testid, postalCode.trim())
    await chooseBankAccountTab.houseNoInputBox.click()
})

Then(/^user receives postalcode error (.*)$/, async function(alertMessage) {
    await chooseBankAccountTab.validateAlertMessageForPostalCodeTextbox(this.testid, alertMessage)
})

When(/^user inputs invalid house house number (.*)$/, async function(houseNumber) {
    await chooseBankAccountTab.enterHouseNumber(this.testid, houseNumber.trim())
    await chooseBankAccountTab.houseNoSuffixInputBox.click()
})

Then(/^user recives house number error (.*)$/, async function(alertMessage) {
    await chooseBankAccountTab.validateAlertMessageForHouseNoTextbox(this.testid, alertMessage)
})


When(/^user inputs invalid house house number (.*)$/, async function(houseNumber) {
    await chooseBankAccountTab.enterHouseNumber(this.testid, houseNumber.trim())
    await chooseBankAccountTab.houseNoSuffixInputBox.click()
})

When(/^user inputs house no (.*) and postal code (.*)$/, async function(houseNumber, postalCode) {

    await chooseBankAccountTab.selectPrivateBanking(this.testid)
    await chooseBankAccountTab.selectSelfAccount(this.testid)
    await chooseBankAccountTab.inputHouseNoAndZipCode(this.testid, houseNumber, postalCode)
})

Then(/^validate that (.*) and (.*) is auto detected$/, async function(streetName, town) {

    await chooseBankAccountTab.validateAutoFill(this.testid, streetName, town)
})

When(/^navigate to your details tab to enter diacritic name$/, async function() {
    await personalDetailsTab.enterPersonaldetails(this.testid, constants.DIACRITIC_ACCOUNT_DETAILS)
})

Then(/^validate that the diacritic characters are accepted$/, async function() {

    await identifyingTab.validateThanIdentificationTabIsOpen(this.testid)
})

When(/^user select else option on identication document$/, async function() {
    await identifyingTab.selectElseoption(this.testid)
})

Then(/^validate we can't help you online messsage$/, async function() {

    await identifyingTab.validateElseOptionNotificationMessage(this.testid)
})