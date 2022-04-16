import Page from "./page";
import chai from "chai";
import reporter from "../helper/reporter";
import constants  from "../../data/constants.json";

class ChooseBankAccountTab extends Page {
    
    constructor() {
        super()
    }

    /** Page Objects */
    get tabTitle() { return $(`//*[@id="currentStep"]/div/span[2]`) }
    get privateBtn() { return $(`//*[@id="P391-C2-C1-C0-C0-C1-F1-0"]/span`) }
    get bussinessBtn() { return $(`//*[@id="P391-C2-C1-C0-C0-C1-F1-1"]/span`) }
    get forMyselfBtn() { return $(`//*[@id="P391-C2-C1-C0-C0-C1-F3-0"]/span`) }
    get forBothOfUsBtn() { return $(`//*[@id="P391-C2-C1-C0-C0-C1-F3-1"]/span`) }
    get forMyselfAlertMsg() {return $('//*[@id="P391-C2-C1-C0-C0-C1-TI9"]/span/ofm-notification-block/div/p')}
    get liveInNetherlandsYesRadioBtn() {return $('//*[@id="P391-C2-C1-C0-C0-C2-C0-C1-F0-0"]')}
    get liveInNetherlandsNoRadioBtn() {return $('//*[@id="P391-C2-C1-C0-C0-C2-C0-C1-F0-1"]')}
    get postalCodeInputBox() { return $(`//*[@id="P391-C2-C1-C0-C0-C2-C0-C3-C0-C0-F0"]`) }
    get houseNoInputBox() { return $(`//*[@id="P391-C2-C1-C0-C0-C2-C0-C3-C0-C1-F0"]`) }  
    get houseNoSuffixInputBox()  { return $(`//*[@id="P391-C2-C1-C0-C0-C2-C0-C3-C0-C2-F0"]`) }  
    get streetNameInputBox()  { return $(`//*[@id="P391-C2-C1-C0-C0-C2-C0-C3-C0-C3-F0"]`) }  
    get streetNameStaticInputBox()  { return $(`//*[@id="field-P391-C2-C1-C0-C0-C2-C0-C3-C0-C3-F0"]/div/div/ofm-read-only/p`) } 
    get townNameStaticInputBox()  { return $(`//*[@id="field-P391-C2-C1-C0-C0-C2-C0-C3-C0-C4-F0"]/div/div/ofm-read-only/p`) }
    get townInputBox()  { return $(`//*[@id="P391-C2-C1-C0-C0-C2-C0-C3-C0-C4-F0"]`) }  
    get tellusWhoYouAreBtn() { return $(`//*[@id="P391-C2-C2-B0"]/span`) }
    get houseNumberErrorAlert() { return $(`//*[@id="field-P391-C2-C1-C0-C0-C2-C0-C3-C0-C1-F0"]/div/div/ofm-field-validation/div/div/span/span[2]`) }
    get postalCodeErrorAlert() { return $(`//*[@id="field-P391-C2-C1-C0-C0-C2-C0-C3-C0-C0-F0"]/div/div/ofm-field-validation/div/div/span/span[2]`) }
    get streetNameErrorAlert() { return $(`//*[@id="field-P391-C2-C1-C0-C0-C2-C0-C3-C0-C3-F0"]/div/div/ofm-field-validation/div/div/span/span[2]`) }
    get townErrorAlert() { return $(`//*[@id="field-P391-C2-C1-C0-C0-C2-C0-C3-C0-C4-F0"]/div/div/ofm-field-validation/div/div/span/span[2]`) }


    /**Page Actions */

    async navigateTochooseBankAccountTab(testid: string) {
        await this.navigateTo()
        // await browser.debug()
        let pageTitle = await browser.getTitle()
        chai.expect(pageTitle).to.equal("Open your own bank account - ABN AMRO")
        reporter.addStep(testid, "info", `Open your own bank account page is open`)
    }

    async chooseBankAccountTabSelected(testid: string) {
        await chai.expect(this.privateBtn.isDisplayed()).to.be.true
        reporter.addStep(testid, "info", `choose bank account tab is selected`)

    }

    async selectPrivateBanking(testid: string) {
        await this.click(await this.privateBtn)
        reporter.addStep(testid, "info", `Private banking option selected`)
    }

    async selectSelfAccount(testid: string) {
        await this.click(await this.forMyselfBtn)
        reporter.addStep(testid, "info", `For myself option selected`)
    }

    async selectYesForLiveInNetherlands(testid: string) {
        if (! await this.liveInNetherlandsYesRadioBtn.isSelected())
        {
          await this.click(await this.liveInNetherlandsYesRadioBtn)
        }
        reporter.addStep(testid, "info", `yes for do you live in the Netherlands selected`)
    }

    async enterPostalCode(testid: string, postalCode: string) {

        await this.typeInto(await this.postalCodeInputBox, postalCode)
        reporter.addStep(testid, "info", `PostalCode ${postalCode} entered successfully`)
    }

    async enterHouseNumber(testid: string, houseNumber: string) {
        await this.typeInto(await this.houseNoInputBox, houseNumber)
        reporter.addStep(testid, "info", `House Number ${houseNumber} entered successfully`)
    }

    async enterStreetName(testid: string, streetName: string) {
        await this.typeInto(await this.streetNameInputBox, streetName)
        reporter.addStep(testid, "info", `Street name ${streetName} entered successfully`)
    }

    async enterTown(testid: string, town: string) {
        // await (await this.townInputBox).addValue(town.trim())
        await this.typeInto(await this.townInputBox, town)
        reporter.addStep(testid, "info", `Town ${town} entered successfully`)
    }

    async clickTellUsWhoYouAreButton(testid: string) {
        await this.click(await this.tellusWhoYouAreBtn)
        reporter.addStep(testid, "info", `clicked tell us who you are button`)
    }

    async validateAlertMessageForPostalCodeTextbox(testid: string, errorMessage: String) {

        let actualErrorMessage = (await this.postalCodeErrorAlert.getText()).trim()
        await chai.expect(actualErrorMessage).to.equal(errorMessage)
        reporter.addStep(testid, "info", `Validated actual value : "${actualErrorMessage}" to expected postal code error : "${errorMessage}"`)
    } 

    async validateAlertMessageForHouseNoTextbox(testid: string, errorMessage: String) {

        let actualErrorMessage = (await this.houseNumberErrorAlert.getText()).trim()
        await chai.expect(actualErrorMessage).to.equal(errorMessage)
        reporter.addStep(testid, "info", `Validated actual value : "${actualErrorMessage}" to expected House No error : "${errorMessage}"`)
    }


    async addAddressDetails(testid, address) {
        
        await this.houseNoInputBox.waitForExist()
        await this.houseNoInputBox.scrollIntoView()
        await this.typeInto(await this.houseNoInputBox, address.HOUSE_NO)
        reporter.addStep(testid, "info", `House number entered sucessfully ${address.type}`)

        await this.typeInto(await this.postalCodeInputBox, address.POSTAL_CODE)
        reporter.addStep(testid, "info", `Postal code entered sucessfully`)

        let isStreetNameAutoGenerated = await this.streetNameStaticInputBox.isDisplayed()
        if (isStreetNameAutoGenerated)
        {
            let autoGeneratedStree = await this.streetNameStaticInputBox.getText()
            await chai.expect(autoGeneratedStree.toLowerCase()).to.equal(address.STREET_NAME.toLowerCase())
        }
        else{
            await this.streetNameInputBox.setValue(address.STREET_NAME)
        }
        reporter.addStep(testid, "info", `Street Name entered sucessfully ${address.STREET_NAME}`)

        let isTownNameAutoGenerated = await this.townNameStaticInputBox.isDisplayed()
        if (isTownNameAutoGenerated)
        {
            let autoGeneratedTown = await this.townNameStaticInputBox.getText()
            await chai.expect(autoGeneratedTown.toLowerCase()).to.equal(address.TOWN.toLowerCase())
        }
        else{
            await this.townInputBox.setValue(address.TOWN)
        }

        reporter.addStep(testid, "info", `Town Name entered sucessfully ${address.TOWN}`)
        
    }



}
export default new ChooseBankAccountTab()