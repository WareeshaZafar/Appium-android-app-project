Feature: Enter in a Free Ticket Event

  @POSITIVE
  Scenario: User logs in the app (POSITIVE SCENARIO)
    Given The location of the device is set
    When The user logs in by entering phone number and OTP
    When The user selects the location and notifications permission from the popup
    Then The user is successfully logged in to their account!
     
  @POSITIVE
  Scenario: The user enters in a free ticket event (POSITIVE SCENARIO)
    When The user searches and selects a free ticket event
