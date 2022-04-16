import Page from "./page"
import chai from "chai"
import reporter from "../helper/reporter"


class ConfirmationTab extends Page {
    
    constructor() {
        super()
    }

    /** Page Objects */

    get nameText() { return $(`//*[@id="P580-C2-C0-TI5"]/span/p/table/tbody/tr[3]/td`) }
    get addressText() { return $(`//*[@id="P580-C2-C0-TI5"]/span/p/table/tbody/tr[6]/td`) }
    get dateOfBirthText() { return $(`//*[@id="P580-C2-C0-TI5"]/span/p/table/tbody/tr[9]/td`) }
    get emailAddressText() { return $(`//*[@id="P580-C2-C0-TI5"]/span/p/table/tbody/tr[15]/td`) }
    get telephoneNumberText() { return $('//*[@id="P580-C2-C0-TI5"]/span/p/table/tbody/tr[12]/td')}
    get applyBtn() { return $(`//*[@id="P580-C2-C1-B1"]`) }
    get conformLabel() {return $('//*[@id="P872-C1-C0-TI2"]/p/h3[1]')}

    async validateName(testid: string, value: string) {
        let actualValue = await this.nameText.getText()
        await chai.expect(actualValue.toLowerCase().trim()).to.equal(value.toLowerCase().trim())
        reporter.addStep(testid, "info", `Expected value: ${value} matched with actual : ${actualValue}`)
    }

    async validateAddress(testid: string, value: string) {
        let actualValue = await this.addressText.getText()
        await chai.expect(actualValue.toLowerCase().trim()).to.equal(value.toLowerCase().trim())
        reporter.addStep(testid, "info", `Expected value: ${value} matched with actual : ${actualValue}`)
    }

    async validateDataBirth(testid: string, value: string) {
        let actualValue = await this.dateOfBirthText.getText()
        await chai.expect(actualValue.toLowerCase().trim()).to.equal(value.toLowerCase().trim())
        reporter.addStep(testid, "info", `Expected value: ${value} matched with actual : ${actualValue}`)
    }

    async validateTelephoneNumber(testid: string, value: string) {
        let actualValue = await this.telephoneNumberText.getText()
        await chai.expect(actualValue.toLowerCase().trim()).to.equal(value.toLowerCase().trim())
        reporter.addStep(testid, "info", `Expected value: ${value} matched with actual : ${actualValue}`)
    }

    async validateEmailAddress(testid: string, value: string) {
        let actualValue = await this.emailAddressText.getText()
        await chai.expect(actualValue.toLowerCase().trim()).to.equal(value.toLowerCase().trim())
        reporter.addStep(testid, "info", `Expected value: ${value} matched with actual : ${actualValue}`)
    }

    async clickApplyNow(testid: string) {
        await this.click(await this.applyBtn)
        reporter.addStep(testid, "info", `clicked apply button`)
    }

    async validateSubmitSuccessfully(testid: string) {
        await this.conformLabel.waitForExist()
        let actualValue = await this.conformLabel.getText()
        await chai.expect(actualValue.toLowerCase().trim()).to.equal("Thank you for choosing ABN AMRO!".toLowerCase())
        reporter.addStep(testid, "info", `Expected value: "Thank you for choosing ABN AMRO!" matched with actual : ${actualValue}`)
    }

    async validatePersonDetails(testid, details){

        await this.nameText.waitForExist()
        let expectedName = await details.SALUTATION + ' ' + details.INITIAL + '. (' +  details.FIRST_NAME + ') ' + details.SURNAME
        reporter.addStep(testid, "info", `Expected value : ${expectedName}`)
        await this.validateName(testid, expectedName)
        let expectedAddress = await details.ADDRESS.STREET_NAME + ' ' + details.ADDRESS.HOUSE_NO + '\n' + details.ADDRESS.POSTAL_CODE + ' ' + details.ADDRESS.TOWN
        reporter.addStep(testid, "info", `Expected value : ${expectedAddress}`)
        await this.validateAddress(testid, expectedAddress)
        await this.validateDataBirth(testid, details.DATE_OF_BIRTH)
        await this.validateTelephoneNumber(testid, details.TELEPHONE)
        await this.validateEmailAddress(testid, details.EMAIL)
        await this.clickApplyNow(testid)
    }


}
export default new ConfirmationTab()