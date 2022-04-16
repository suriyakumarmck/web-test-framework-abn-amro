import Page from "./page"
import chai from "chai"
import reporter from "../helper/reporter"


class PersonalDetailsTab extends Page {
    
    constructor() {
        super()
    }

    /** Page Objects */
    get salutationMrRadioBtn() { return $(`//*[@id="P390-C2-C0-C1-C2-F0-0"]`) }
    get salutationMsRadioBtn() { return $(`//*[@id="P390-C2-C0-C1-C2-F0-1"]`) }
    get initialsInputBox() { return $(`//*[@id="P390-C2-C0-C1-C3-F0"]`) }
    get firstNamesInputBox() { return $(`//*[@id="P390-C2-C0-C1-C4-F0"]`) }  
    get surnamePrefixInputBox() { return $(`//*[@id="P390-C2-C0-C1-C5-F0"]`) }
    get surnameInputBox() { return $(`//*[@id="P390-C2-C0-C1-C6-C0-F0"]`) }
    get dataOfBirthInputBox() { return $(`//*[@id="P390-C2-C0-C1-C8-F0"]`) }
    get USABornYesRadioBtn() { return $(`//*[@id="P390-C2-C0-C1-F9-0"]`) }
    get USABornNoRadioBtn() { return $(`//*[@id="P390-C2-C0-C1-F9-1"]`) }   
    get nationalityDropDownBtn() { return $('//*[@id="dropdown-P390-C2-C0-C4-C1-F0"]')}  
    get BSNNoInputBox() { return $(`//*[@id="P390-C2-C0-C4-C3-F0"]`) }  
    get payTaxInNetherlandsYesbtn() { return $(`//*[@id="P390-C2-C0-C4-F5-0"]`) }
    get toIdentificationbtn() {return $('//*[@id="P390-C2-C1-B1"]')}

    /** Page Actions */

    async selectSalutation(testid: string) {
        let ele =  await this.salutationMrRadioBtn
        await this.click(ele)
        reporter.addStep(testid, "info", `Salutation selected `)
        await browser.pause(500)
    }

    async enterInitial(testid: string, value: string) {
        await this.initialsInputBox.setValue(value)
        reporter.addStep(testid, "info", `Initial: ${value} entered successfully`)
        await browser.pause(500)
    }

    async enterfirstName(testid: string, value: string) {
        await this.typeInto(await this.firstNamesInputBox, value)
        reporter.addStep(testid, "info", `First Name: ${value} entered successfully`)
    }

    async enterBsnNumber(testid: string, value: string) {
        let bsnNo = (await this.BSNNoInputBox.getText())
        await this.BSNNoInputBox.scrollIntoView()
        while(bsnNo != value.trim())
        {
            await this.BSNNoInputBox.setValue(value.trim())
            bsnNo = (await this.BSNNoInputBox.getValue()).trim()
            reporter.addStep(testid, "info", `BSN Number: actual : ${bsnNo} expected : ${value} entered successfully`)
        }
        await browser.pause(1000)
        reporter.addStep(testid, "info", `BSN Number: ${value} entered successfully`)
    }

    async enterSurname(testid: string, value: string) {
        let ele = await this.surnameInputBox
        await ele.setValue(value)
        reporter.addStep(testid, "info", `Surname: ${value} entered successfully`)
    }

    async enterDateOfBirth(testid: string, value: string) {
        await this.dataOfBirthInputBox.setValue(value)
        reporter.addStep(testid, "info", `DateOfbirth: ${value} entered successfully`)
    }

    async selectNoForUSABorn(testid: string) {

        await this.click(await this.USABornNoRadioBtn)
        reporter.addStep(testid, "info", `Non USA Born Selected `)
    }

    async selectNationality(testid: string, value: string) {
        await this.dropDown(await this.nationalityDropDownBtn, value)
        reporter.addStep(testid, "info", `Nationality: ${value} entered successfully`)
    }

    async selectYesForOnlyTaxPayInNetherlands(testid: string) {
        await this.payTaxInNetherlandsYesbtn.waitForClickable({ timeout: 500 })
        await this.payTaxInNetherlandsYesbtn.click()
        reporter.addStep(testid, "info", `Tax pay only in Netherlands selected`)
    }

    async clickToIdentificationbtn(testid: string) {
        await this.click(await this.toIdentificationbtn)
        reporter.addStep(testid, "info", `clicked to identification button`)
    }

    async enterPersonaldetails(testid, details){
        
        await this.salutationMrRadioBtn.waitForExist()
        await this.selectSalutation(testid)
        await this.enterInitial(testid, details.INITIAL)
        await this.enterfirstName(testid, details.FIRST_NAME)
        await this.enterSurname(testid, details.SURNAME)
        await this.enterDateOfBirth(testid, details.DATE_OF_BIRTH)
        await this.selectNoForUSABorn(testid)
        await this.selectYesForOnlyTaxPayInNetherlands(testid)
        await this.enterBsnNumber(testid, details.BSN_NO)
        await this.selectYesForOnlyTaxPayInNetherlands(testid)
        await this.clickToIdentificationbtn(testid)
    }
}
export default new PersonalDetailsTab()