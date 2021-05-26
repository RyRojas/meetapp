Feature: Show/Hide an Event's Details

    As a user,
    I should be able to filter events by city,
    so that I can see the list of events that take place in that city.

Scenario: An event element is collapsed by default
Given the user is on the home page
When the user has not expanded an event
Then events will be listed in their collapsed view

Scenario: User can expand an event to see its details
Given the user is on the home page
And the user has not expanded an event
When the user clicks on an event listing
Then the event element will expand to show the event's details

Scenario: User can collapse an event to hide its details
Given the user has expanded an event
When the user clicks on the expanded event listing
Then the event element will collapse to hide the event's details