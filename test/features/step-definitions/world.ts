import { setWorldConstructor } from "@cucumber/cucumber"

/** World class used to share data between different steps in an scenario*/
class CustomWorld {
    testid: string
    constructor() {
        this.testid = ""
    }
}
setWorldConstructor(CustomWorld)