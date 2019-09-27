Feature: To test login feature on my mobile app

@LoginSuccessScenario
Scenario: Login success via 62345678@gmail.com account
  Given I am on login page
  When I enter '62345678@gmail.com' and password 'Tw123456'
  Then I should see home page with ''
