Feature: Login Feature for an existing user

  @POSITIVE
  Scenario: User logs in the app (POSITIVE SCENARIO)
    Given The location of the device is set
    When The user logs in by entering phone number and OTP
    When The user selects the location and notifications permission from the popup
    Then The user is successfully logged in to their account!
    
# @POSITIVE
#   Scenario: User logs out the app (POSITIVE SCENARIO)
#     When The user clicks the profile icon, lands on the profile screen and proceeds to the settings page to logout
#     Then The user has successfully logged out!
# @NEGATIVE
#   Scenario: User logs in the app through Create Personal Account option (NEGATIVE SCENARIO #1)
#     When The user tries to create a personal account
#     Then The user is shown an error popup Account Already Exists
  # already registered account - logging it in through create personal account button
  # account not existing before - user trying log in through it
  # country picker field - validations testing
  # phone number field - validations testing
