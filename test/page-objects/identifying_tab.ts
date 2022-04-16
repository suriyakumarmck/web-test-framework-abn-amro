import Page from "./page"
import chai from "chai"
import reporter from "../helper/reporter"


class IdentifyingTab extends Page {
    
    constructor() {
        super()
    }

    /** Page Objects */
    get dutchPassportRadioBtn() { return $(`//*[@id="P389-C2-C0-C0-F2-0"]`) }
    get emailInputBox() { return $(`//*[@id="P389-C2-C0-C1-C1-C1-F0"]`) }   
    get phoneNoInputBox() { return $(`//*[@id="P389-C2-C0-C1-C1-C2-F0"]`) }  
    get toClosingQuestionsBtn() { return $(`//*[@id="P389-C2-C1-B1"]`) } 


    async selectDutchPassportoption(testid: string) {
        await this.dutchPassportRadioBtn.click()
        await browser.pause(1000)
        reporter.addStep(testid, "info", `Dutch Passport is selected`)
    }

    async clickToClosingQuestionsBtn(testid: string) {
        await this.click(await this.toClosingQuestionsBtn)
        reporter.addStep(testid, "info", `clicked to Closing Questions button`)
    }

    async enterEmailAddress(testid: string, value: string) {
        await this.typeInto(await this.emailInputBox, value)
        reporter.addStep(testid, "info", `email address : ${value} entered successfully`)
    }

    async enterTelephoneNumber(testid: string, value: string) {
        await this.typeInto(await this.phoneNoInputBox, value)
        reporter.addStep(testid, "info", `Phone Number: ${value} entered successfully`)
    }

    async fillIdentificationDetail(testid, identificationdetails){

        await this.dutchPassportRadioBtn.waitForExist({ timeout: 5000 })
        await this.selectDutchPassportoption(testid)
        await this.enterEmailAddress(testid, identificationdetails.EMAIL)
        await this.enterTelephoneNumber(testid, identificationdetails.TELEPHONE)
        await this.clickToClosingQuestionsBtn(testid)
    }


}

export default new IdentifyingTab()