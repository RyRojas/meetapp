## **Feature 1: Filter events by city**

### **User Story**

As a user,  
I should be able to filter events by city,  
so that I can see the list of events that take place in that city.

### **Scenarios**

#### **Scenario 1: When user hasn't searched for a city, show upcoming events from all cities**

**Given** user hasn't searched for any city  
**When** the user opens the app  
**Then** the user should see a list of all upcoming events.

#### **Scenario 2: User should see a list of suggestions when they search for a city**

**Given** the main page is open  
**When** the user starts typing in the city textbox  
**Then** the user should see a list of cities (suggestions) that match what they've typed.

#### **Scenario 3: User can select a city from the suggested list**

**Given** the user was typing "Berlin" in the city textbox and the list of suggestions is showing  
**When** the user selects a city (e.g. "Berlin, Germany") from the list  
**Then** their city should be changed to the selected city and the user should receive a list of upcoming events in that city.

## **Feature 2: Show/Hide an event's details**

### **User Story**

As a user,  
I should be able to expand and collapse an event listing,  
so that I can see the details of events I am interested in.

### **Scenarios**

#### **Scenario 1: An event element is collapsed by default**

**Given** the user is logged in  
**When** the user is on the home page  
**Then** events will be listed in their collapsed view

#### **Scenario 2: User can expand an event to see its details**

**Given** the user has not selected an event  
**When** the user clicks on an event listing  
**Then** the event element will expand to show the event's details

#### **Scenario 3: User can collapse an event to hide its details**

**Given** the user has selected an event  
**When** the user clicks on the expanded event listing  
**Then** the event element will collapse to hide the event's details

## **Feature 3: Specifiy number of events**

### **User Story**

As a user,  
I should be able to specify the number of events listed,  
so that I can more easily browse the event listings.

### **Scenarios**

#### **Scenario 1: When user hasn’t specified a number, 32 is the default number**

**Given** the user is on the home page  
**When** the user has not entered a number into the events shown box
**Then** the application will render 32 event listings

#### **Scenario 2: User can change the number of events they want to see**

**Given** the user is on the home page  
**When** the user enters a number into the listings shown box  
**Then** the application will render the specified number of event listings

## **Feature 4: Use the app when offline**

### **User Story**

As a user,  
I should be able to use MeetApp when offline,  
so that I can view local events in areas with spotty cell coverage.

### **Scenarios**

#### **Scenario 1: Show cached data when there’s no internet connection**

**Given** the user has a prior session  
**When** the user has no internet connection  
**Then** the application will display cached data

#### **Scenario 2: Show error when user changes the settings (city, time range)**

**Given** the user has no internet connection  
**When** the user changes city or date settings  
**Then** the application will display an error

## **Feature 5: Data visualization**

### **User Story**

As a user,  
I should be able to view the number of events in my city,  
so that I can see how active the MeetApp community is in my city.

### **Scenarios**

#### **Scenario 1: Show a chart with the number of upcoming events in each city**

**Given** the user is logged in  
**When** the user has a city selected
**Then** the application will display the total number of event listings for that city.
