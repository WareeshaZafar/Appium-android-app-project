Feature: Competition Feature for an existing user


@POSITIVE
  Scenario: User logs in the app (POSITIVE SCENARIO)
    Given The location of the device is set
    When The user logs in by entering phone number and OTP
    When The user selects the location and notifications permission from the popup
    Then The user is successfully logged in to their account!

@POSITIVE
  Scenario: User enters a competition (POSITIVE + NEGATIVE SCENARIOS)
    When The user navigates to the competition tab
    When The user finds a general competition to enter
    Then The user verifies that the draw time is not null
    Then The user verifies that the entered competition count is not negative
    Then The user verifies that the max winners count is not negative
    Then The user reads the competition details and Terms n Conditions text
