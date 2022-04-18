Feature: Test "Open new private bank account" functionality of ABN AMRO online portal

  Background: User is on ABN Amro open bank account page
    Given ABN AMRO open accounts page is opened

  @sanity @happyFlow
  Scenario: TC-01: Verify that new user can open private bank account with valid data

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
      | TC-02  | Invalid data    | invalid    | invalid     | We do not recognise your postcode. Please check that it has been entered correctly. | Use only numbers.              |
      | TC-03  | Symbols         | @#$%       | @#$%        | We do not recognise your postcode. Please check that it has been entered correctly. | Use only numbers.              |
      | TC-04  | Empty data      |            |             | Fill in an answer to continue.                                                      | Fill in an answer to continue. |

  @sanity
  Scenario Outline: <TestId>: validate auto detect address feature

    When user inputs house no <HouseNo> and postal code <PostalCode>
    Then validate that <StreetName> and <TownName> is auto detected
  
  Examples:
   | TestId | HouseNo | PostalCode | StreetName         | TownName   |
   | TC-06  | 10      | 1082 PP    | Gustav Mahlerlaan  | AMSTERDAM  |
   | TC-07  | 1       | 5046 GA    | Bart van Peltplein | Tilburg    |
   | TC-08  | 4       | 1781 KK    | Koningsplein       | Den Helder |
   | TC-09  | 77      | 3526 KT    | Vliegend Hertlaan  | Utrecht    |
   | TC-10  | 2       | 2333 CT    | Bargelaan          | Leiden     |

  @sanity
  Scenario: TC-11: Validate diacritic characters are accepted in name details field

    When user selects private banking to input valid address
    And navigate to your details tab to enter diacritic name
    Then validate that the diacritic characters are accepted
  
  @smoke @sanity
  Scenario: TC-12: Validate Else Option on Identification tab

    When user selects private banking to input valid address
    And navigate to your details tab to enter user details
    And user select else option on identication document
    Then validate we can't help you online messsage