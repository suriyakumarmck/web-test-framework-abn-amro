[![CircleCI](https://circleci.com/gh/suriyakumarmck/web-test-framework-abn-amro/tree/master.svg?style=svg)](https://circleci.com/gh/suriyakumarmck/web-test-framework-abn-amro/tree/master)

# ABN AMRO web testing framework Assignment
Web Automation Framework for ABN AMRO Assignment

# Framework Description

Framework is written in TypeScript using BDD cucumber, and WebdriverIO follows layered architecture for UI testing, also integrated with Circle CI for CI/CD.


- ```"tests > features > open-private-bank-account-functional-testcases"``` contains feature files written in Gherkin 
- ```"tests > features > step-definitions"``` contains all the step definitions
- ```"tests > page-objects"``` contains object oriented classes which defines each page in the UI

**Core modules used** 

- ```"WDIO"```     -- Framework used to automate web
- ```"Cucumber"``` -- BDD Test framework 
- ```"Chai"```     -- Assertion library
- ```"Winston"```  -- Logger
- ```"Allure"```   -- Reporter
- ```"CircleCI"``` -- CI/CD

**Requirements** 
- Node v16.14.2(any latest version)
- brew (for mac)
- Chrome browser Installed
- Java 8 or above(to generate report automatically)

**setup**
- Install latest node (16.14 or above)
- clone the repository
- navigate to the root directory of this repository using any terminal
- run following commands
 > 
        - npm install
        - brew install allure (for mac)
 
 **Test Execution** - Running Via Command Line
 - Open ```terminal```
 - Goto ```Project directory```
 - to execute all test cases : 
 > 
 		- npm run test:all
 
 - to do a sanity test(provide the tag @sanity as argument) : 
 > 
 		- npm run test @sanity
    
 - to run tests on basis of tags : 
 > 
 		- npm run test @<tagname>

 - to run tests on headless mode : 
 > 
 	Linux/Mac:
		 - npm run test:headlessmode @<tagname>
	Windows:
	     - npm run test:headlessmode:windows @<tagname>

 - to run tests on debug mode : 
 > 
 	Linux/Mac:
		 - npm run test:debugmode @<tagname>
	Windows:
	     - npm run test:debugmode:windows @<tagname>

## Test Report: 
 This framework uses allure reporter and winston logger so after execution below directories will be generated at root level:
- ```"allure-report"``` contains files related to report
- ```"allure-results"``` contains json and xml files related to allure reporter.
- ```"logs"```  contains winston log file for execution logs

   - to view the report : 
 > 
 		- allure serve 
  or
> 
 		- allure open allure-report 
 The above command will open the allure html report on a browser which will provide the insights and screenshots about the test execution.
 For all other cucumber configuration check wdio.conf.ts

## Logs:
Winston execution logs can be found on /logs folder with time stamped.

## CI/CD
This framework is currently integarted with Circle CI CI/CD pipeline to run testcase click on the above Pass badge from CircleCI to view the build & execution summary or click on the below link.

https://circleci.com/gh/suriyakumarmck/web-test-framework-abn-amro/tree/master

## Framework Important Components:

### WDIO:
WebdriverIO allows you to automate any application written with modern web frameworks such as React, Angular, Polymeror Vue.js as well as native mobile applications for Android and iOS.

**Reference:** https://webdriver.io/

### Allure reporter:
Allure Framework is a flexible lightweight multi-language test report tool that not only shows a very concise representation of what have been tested in a neat web report form, but allows everyone participating in the development process to extract maximum of useful information from everyday execution of tests.

**Reference:** https://docs.qameta.io/allure/

### Winston logger:
winston is designed to be a simple and universal logging library with support for multiple transports. A transport is essentially a storage device for your logs. Each winston logger can have multiple transports (see: Transports) configured at different levels (see: Logging levels). For example, one may want error logs to be stored in persistent remote location (like a database), but all logs output to the console or a local file.

**Reference:** https://www.npmjs.com/package/winston

### Chai:
Chai is an assertion library, similar to Node's built-in assert. It makes testing much easier by giving you lots of assertions you can run against your code

**Reference:** https://www.npmjs.com/package/winston

### Cucumber:
Cucumber can be used to implement automated tests based on scenarios described in your Gherkin feature files.

**Reference** https://cucumber.io/docs/cucumber/api/

### CircleCI:
 CI/CD platform delivers speed and reliability —in the cloud or on your private infrastructure.
 
 **Reference** https://circleci.com/

