import { BeforeStep } from "@cucumber/cucumber";

/** This implementation of BeforeStep function which is used for setting up testID from feature file. */
BeforeStep(function () {
    // @ts-ignore
    this.testid = browser.config.testid
})