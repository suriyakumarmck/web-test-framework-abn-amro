import Page from "./page"
import reporter from "../helper/reporter"


class closingQuestionsTab extends Page {
    
    constructor() {
        super()
    }

    /** Page Objects */

    get notApplicableRadioBtn() { return $(`//*[@id="P388-C2-C0-C0-C2-F1-2"]`) }
    get directorOfACompanyNoRadioBtn() { return $(`//*[@id="P388-C2-C0-C0-C2-F4-1"]`) }
    get transferLimitNoRadioBtn() { return $(`//*[@id="P388-C2-C0-C0-C2-F6-1"]`) }
    get bankTerminateRelationshipNoRadioBtn() { return $(`//*[@id="P388-C2-C0-C0-C2-F7-1"]`) }
    get overviewBtn() { return $(`//*[@id="P388-C2-C1-B1"]`) }

    async selectNotApplicable(testid: string) {

        await this.notApplicableRadioBtn.waitForExist()
        await this.notApplicableRadioBtn.click()
        await browser.pause(500)
        reporter.addStep(testid, "info", `Not Applicable Selected`)
    }

    async selectNoForDirectorOfCompany(testid: string) {

        await this.directorOfACompanyNoRadioBtn.scrollIntoView()
        await this.directorOfACompanyNoRadioBtn.click()
        await browser.pause(500)
        reporter.addStep(testid, "info", `Selected no for direct of company`)
    }

    async selectNoForTransferMoreThan500000euros(testid: string) {

        await this.transferLimitNoRadioBtn.scrollIntoView()
        await this.transferLimitNoRadioBtn.click()
        await browser.pause(500)
        reporter.addStep(testid, "info", `Selected no for transfer more than 500,000 euro's`)
    }

    async selectNoForBankRefusals(testid: string) {

        await this.bankTerminateRelationshipNoRadioBtn.scrollIntoView()
        await this.bankTerminateRelationshipNoRadioBtn.click()
        await browser.pause(500)
        reporter.addStep(testid, "info", `Selected no for bank refusals`)
    }


    async clickOverviewBtn(testid: string) {
        await this.overviewBtn.isClickable()
        this.click(await this.overviewBtn)
        reporter.addStep(testid, "info", `Overview button clicked`)
    }

    async answerClosingQuestions(testid){

          await this.selectNotApplicable(testid)
          await this.selectNoForDirectorOfCompany(testid)
          await this.selectNoForTransferMoreThan500000euros(testid)
          await this.selectNoForBankRefusals(testid)
          await this.clickOverviewBtn(testid)
    }


}
export default new closingQuestionsTab()