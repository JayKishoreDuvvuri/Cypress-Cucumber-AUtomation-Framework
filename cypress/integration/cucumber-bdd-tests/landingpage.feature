Feature: Launch the Application

As a user
I want to launch the Application and navigate to the Landing Page.
I verify the Titles, Lables and Text in the Text Sections.

Scenario: Launch Application
Given I launch the application
When  I open the application
Then  I should see the landing page
Then  I should see the first text section
And   I should see the second text section
