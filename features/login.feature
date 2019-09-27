Feature: To test login feature on my mobile app

@LoginSuccessScenario
Scenario: Login success via 62345678@gmail.com account
  Given I am on login page
  When I put "62345678@gmail.com" as username and "Tw123456" as password
  Then I should on home page with

