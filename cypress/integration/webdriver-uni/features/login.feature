Feature: Login successfully into the webdriverUniversity
     Feature to test login page

@regression
Scenario Outline: Scenario Outline name: Login using valid credentials
    Given I access the webdriverUniversity Login Portal Page
    When I enter a username <username>
    And I enter a password <password>
    And I click on the login button
    Then I should be presented with following message validation <message>

    Examples:
        | username   | password      | message   |
        | webdriver  | webdriver123  | succeeded |
        | webdriver  | webdriver12   | failed    |
        | job        | pass12        | failed    |

