Feature: Dark Knight Trailer 

  Scenario: Play the Dark Knight Trailer

    Given I am on the home page
    When I wait until the Menu Icon is clickable
    Then I should click on the menu icon
    And I should validate the menu is displayed
    When I verificate that I can see the Top 250 Movies option
    Then I should click on the Top 250 Movies option
    And I should validate I am on the Top 250 Movies Page
    Then I wait until the movie The Dark Knight is shown in the Page
    And I click on the The Dark Knight movie
    Then I should validate that the player state is idle
    And I should scroll until see the video
    When I click on the play button
    Then I should be on the Dark Knight Trailer Page
    And I should validate that the player state is playing
