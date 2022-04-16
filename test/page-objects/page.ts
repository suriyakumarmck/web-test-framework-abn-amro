
export default class Page {
    constructor() {

    }

    /**All reusable web functions */
    async navigateTo(path = "") {
        await  browser.url(path)
        await browser.maximizeWindow()
        // adding cookies to the page
        await browser.setCookies({name: 'CONSENTMGR', value: 'consent:true'})
        await browser.refresh()
    }

    async click(ele: WebdriverIO.Element) {
        await ele.waitForClickable({ timeout: 5000 })
        if (!ele.elementId) {
            await ele.scrollIntoView();
            if (!ele.elementId) throw Error(ele.error.message)
        }
        try{
            await ele.waitForExist()
            await ele.click()
        } catch (err){
            err.message = 'error clicking button, ${err.message}'
            throw err
        }
    }

    async typeInto(ele: WebdriverIO.Element, inputValue) {
        try {
            await ele.scrollIntoView()
            let input = await inputValue.toString().trim()
            await ele.click()
            await ele.clearValue()
            await browser.pause(200)
            for(let i =0; i < input.length; i++)
            {
                let charStr = await input.charAt(i)
                await ele.keys(charStr)
            }
        } catch (err) {
            err.message = `Error entering password, ${err.message}`
            throw err
        }
    }

    async dropDown(ele: WebdriverIO.Element, inputValue: string) {
        await ele.waitForDisplayed({ timeout: 5000 })
        if (!ele.elementId) {
            await ele.scrollIntoView();
            if (!ele.elementId) throw Error(ele.error.message)
        }
        try {
            if((await ele.getValue()).toLowerCase != inputValue.toLowerCase){
                ele.selectByVisibleText(inputValue)
            }
        } catch (err) {
            err.message = `Error entering password, ${err.message}`
            throw err
        }
    }
}