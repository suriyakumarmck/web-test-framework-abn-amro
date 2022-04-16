Feature: Test "Open new private bank account" functionality of ABN AMRO website

  Background: User is on ABN Amro open bank account page
    Given ABN AMRO open accounts page is opened

  @sanity @happyFlow
  Scenario: _01: Verify that new user can open bank private bank account with valid data

    When user selects private banking to input valid address
    And navigate to your details tab to enter user details
    And add identification information on identifying tab
    And user answers closing questions
    Then user validates the information collected
    And personal account creation request is successful

  @sanity @smoke
  Scenario Outline: <TestId>: validate <TestDescription> error messages for Invalid Address attributes

    When user inputs invalid postalcode <PostalCode>
    Then user receives postalcode error <PostalCodeErrorMessage>
    When user inputs invalid house house number <HouseNumber>
    Then user recives house number error <HouseNumberErrorMessage>

  Examples:
      | TestId | TestDescription | PostalCode | HouseNumber | PostalCodeErrorMessage                                                              | HouseNumberErrorMessage        |
      | TC_02  | Invalid data    | invalid    | invalid     | We do not recognise your postcode. Please check that it has been entered correctly. | Use only numbers.              |
      | TC_03  | Symbols         | @#$%       | @#$%        | We do not recognise your postcode. Please check that it has been entered correctly. | Use only numbers.              |
      | TC_04  | Empty data      |            |             | Fill in an answer to continue.                                                      | Fill in an answer to continue. |