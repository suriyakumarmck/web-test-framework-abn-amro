import { setWorldConstructor } from "@cucumber/cucumber";
import chai from "chai"

class CustomWorld {
    testid: string
    constructor() {
        this.testid = ""
    }
}
setWorldConstructor(CustomWorld)