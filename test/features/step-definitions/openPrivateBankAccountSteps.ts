import { Given, When, Then } from "@wdio/cucumber-framework";
import constants  from "../../../data/constants.json";
import chooseBankAccountTab from "../../page-objects/choose_bank_account_tab"
import personalDetailsTab from "../../page-objects/personal_details_tab"
import identifyingTab from "../../page-objects/identifying_tab"
import closingQuestionsTab from "../../page-objects/closing_questions_tab"
import confirmTab from "../../page-objects/confirm_tab"


/** This function helps user to navigate to Open Bank Accounts page*/
Given(/^ABN AMRO open accounts page is opened$/, async function (){
    await chooseBankAccountTab.navigateTochooseBankAccountTab(this.testid)
} )

/** This function helps user to select private banking and also fills address details*/
When(/^user selects private banking to input valid address$/, async function() {

    await chooseBankAccountTab.selectPrivateBanking(this.testid)
    await chooseBankAccountTab.selectSelfAccount(this.testid)
    await chooseBankAccountTab.addAddressDetails(this.testid, constants.PRIVATE_ACCOUNT_DETAILS_VALID_DATA.ADDRESS)
    await chooseBankAccountTab.clickTellUsWhoYouAreButton(this.testid)
})

/** This function helps user to fill in identification information*/
When(/^add identification information on identifying tab$/, async function() {
    await identifyingTab.fillIdentificationDetail(this.testid, constants.PRIVATE_ACCOUNT_DETAILS_VALID_DATA)
})

/** This function helps user to fill on personal details*/
When(/^navigate to your details tab to enter user details$/, async function() {
    await personalDetailsTab.enterPersonaldetails(this.testid, constants.PRIVATE_ACCOUNT_DETAILS_VALID_DATA)
})

/** This function helps user to answer closing questions*/
When(/^user answers closing questions$/, async function() {
    await closingQuestionsTab.answerClosingQuestions(this.testid)
})

/** This function helps user to validate information provided*/
Then(/^user validates the information collected$/, async function() {
    await confirmTab.validatePersonDetails(this.testid, constants.PRIVATE_ACCOUNT_DETAILS_VALID_DATA)
})

/** validate that personal account creation is successful*/
Then(/^personal account creation request is successful$/, async function() {
    await confirmTab.validateSubmitSuccessfully(this.testid)
})

/** This function used to input invalid postal code*/
When(/^user inputs invalid postalcode (.*)$/, async function(postalCode) {
    await chooseBankAccountTab.selectPrivateBanking(this.testid)
    await chooseBankAccountTab.selectSelfAccount(this.testid)
    await chooseBankAccountTab.enterPostalCode(this.testid, postalCode.trim())
    await chooseBankAccountTab.houseNoInputBox.click()
})

/** This function used to validate the invalid postal code error message*/
Then(/^user receives postalcode error (.*)$/, async function(alertMessage) {
    await chooseBankAccountTab.validateAlertMessageForPostalCodeTextbox(this.testid, alertMessage)
})

/** This function used to input house number*/
When(/^user inputs invalid house number (.*)$/, async function(houseNumber) {
    await chooseBankAccountTab.enterHouseNumber(this.testid, houseNumber.trim())
    await chooseBankAccountTab.houseNoSuffixInputBox.click()
})

/** This function used to validate invalid house number error message */
Then(/^user recives house number error (.*)$/, async function(alertMessage) {
    await chooseBankAccountTab.validateAlertMessageForHouseNoTextbox(this.testid, alertMessage)
})

/** This function used to input house number*/
When(/^user inputs invalid house house number (.*)$/, async function(houseNumber) {
    await chooseBankAccountTab.enterHouseNumber(this.testid, houseNumber.trim())
    await chooseBankAccountTab.houseNoSuffixInputBox.click()
})

/** This function used to validate house number and postcal code*/
When(/^user inputs house no (.*) and postal code (.*)$/, async function(houseNumber, postalCode) {

    await chooseBankAccountTab.selectPrivateBanking(this.testid)
    await chooseBankAccountTab.selectSelfAccount(this.testid)
    await chooseBankAccountTab.inputHouseNoAndZipCode(this.testid, houseNumber, postalCode)
})

/** This function used to validate street name and Town*/
Then(/^validate that (.*) and (.*) is auto detected$/, async function(streetName, town) {

    await chooseBankAccountTab.validateAutoFill(this.testid, streetName, town)
})

/** This function used to enter diatric character*/
When(/^navigate to your details tab to enter diacritic name$/, async function() {
    await personalDetailsTab.enterPersonaldetails(this.testid, constants.DIACRITIC_ACCOUNT_DETAILS)
})

/** This function used to validate diatric character*/
Then(/^validate that the diacritic characters are accepted$/, async function() {

    await identifyingTab.validateThanIdentificationTabIsOpen(this.testid)
})

/** This function used to select else option*/
When(/^user select else option on identication document$/, async function() {
    await identifyingTab.selectElseoption(this.testid)
})

/** This function used to validate online notification*/
Then(/^validate we can't help you online messsage$/, async function() {

    await identifyingTab.validateElseOptionNotificationMessage(this.testid)
})