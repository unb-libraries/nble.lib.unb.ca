# Basic functionality testing.
# Ref : phase2/behat-suite
# http://behat-drupal-extension.readthedocs.io/en/3.1/drupalapi.htm

@api
Feature: Core
  In order to know the website is running
  As a website user
  I need to be able to view the site title and login

  @api
    Scenario: Login as a user created during this scenario
      Given users:
      | name      | status |
      | Test user |      1 |
      When I am logged in as "Test user"
      And I visit "/user"
      Then I should see the text "Member for"

  Scenario: Testing the search form
    Given I am on the homepage
    When I fill in "Find an entry" with "Test" in the "left sidebar" region
    And I press "Search" in the "left sidebar" region
    Then I should see the text "search" in the "content" region