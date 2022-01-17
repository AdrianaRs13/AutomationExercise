Feature: Search Bar 

  Scenario: Open Dark Knight Search

    Given I am on the home page
    When I search on SearchBox the Dark Knight
    Then I should click on the Dark Knight option 
    And I should scroll until see the video
    When I click on the play button
    Then I should be on the Dark Knight Trailer Page
    And I should validate that the player state is playing
