Feature: Enter in a Free Event

  @POSITIVE
  Scenario: User logs in the app (POSITIVE SCENARIO)
    Given The location of the device is set
    When The user logs in by entering phone number and OTP
    When The user selects the location and notifications permission from the popup
    Then The user is successfully logged in to their account!
    
  @POSITIVE
  Scenario: The user enters in a free event (POSITIVE SCENARIO)
    When The user searches and selects a free event
    Then The free event detail page opens
    When The user clicks the Going button and chooses to show their profile to everyone
    Then The free event detail page opens
    When The user goes to their wallet
    When The user finds the same free event in their wallet