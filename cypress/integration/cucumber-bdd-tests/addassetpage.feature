Feature: Open the Add Asset Page

As a user
I want to launch the Application and click on the Add Asset Tab
and see the New Asset label with the form add asset input check box 
and submit button with Paper Icon

Scenario: Add Asset Tab
Given I open the application
When  I click on add assets tab
Then  I should see the add asset page
Then  I should see the label New Asset
Then  I should see the form add asset input check box
And   I should see the submit button with paper Icon