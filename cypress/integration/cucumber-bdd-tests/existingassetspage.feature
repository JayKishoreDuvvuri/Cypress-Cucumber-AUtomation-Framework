Feature: Open Existing Assets Page

As a user
I want to launch the Application and click on the Existing Assets Tab
and see the page is opened

Scenario: Existing Assets Tab
Given I open the application
When  I click on existing assets tab
Then  I should see the spinner
Then  I should see the loading icon
Then  I wait for 5 seconds
And   If still I see the page loading I send an error message