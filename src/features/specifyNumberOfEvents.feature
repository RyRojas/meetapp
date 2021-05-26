Feature: Specify number of events

    As a user,
    I should be able to specify the number of events listed,
    so that I can more easily browse the event listings.

Scenario: When user hasn’t specified a number, 16 is the default number
Given the user is on the home page
When the user has not entered a number into the events shown box
Then the application will render a maximum of 16 event listings

Scenario: User can change the number of events they want to see
Given the user is on the home page
When the user enters a number into the listings shown box
Then the application will render the specified number of event listings