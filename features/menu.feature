Feature: The IMBD Page 

  Scenario: Open Top 250 Movies Page

    Given I am on the home page
    When I wait until the Menu Icon is clickable
    Then I should click on the menu icon
    And I should validate the menu is displayed
    When I verificate that I can see the Top 250 Movies option
    Then I should click on the Top 250 Movies option
    And I validate I am on the Top 250 Movies Page
    Then I should validate El padrino is on second place
    And I validate El padrino has a rating of 9.1

