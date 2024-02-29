# AutomationChallenge
## Case: BlazeDemo

UI Scenario: As a user I want to add two products to my cart and finalize the purchase

- After implementing an e2e for the shopping flow, it was detected that certain steps required waits for the test not to fail. It is advisable to measure performance and detect where the problem lies.
- During the final check, it was detected that the date included in the summary of the purchase is not the current date as expected. 

API Scenarios:
- As a new user I want register so that I can log in later
- As a user I want register for a second time so that I can see the response message obtained
- As a user I want to log in so that I can access resources
- As a user I want to log in so that I can access resources

From what was observed cases that are supposed to fail are not failing. 
- Whenever the user registers twice there is an alert that arises in the UI but the response from this request is still returning 200 as response code.
- Whenever the user fails to log in, an alert arises in the UI but the response from this request is still returning 200 as response code.
