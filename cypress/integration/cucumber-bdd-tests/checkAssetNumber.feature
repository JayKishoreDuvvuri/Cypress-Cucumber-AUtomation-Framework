Feature: Check Asset Number

Verify Asset Number format as Valid and Invalid

Scenario: Valid Asset Number
Given I open the application
When  I click on add asset tab
Then  I should see the add asset page
Then  I fill asset number with valid Asset Number
Then  I click the send button
And   I should see the message as correct format



Scenario: Invalid Asset Number
Given Iam on the add asset page
When  I re-enter again asset number with invalid format
Then  I click the send button
And   I should see the message as Incorrect format