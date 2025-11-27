import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/Login_Page';
import testData from '../data/login.json'


Given('The location of the device is set', async () => {
  await browser.setGeoLocation({
    latitude: 33.5189,
    longitude: 73.0909
  });
})

When('The user logs in by entering phone number and OTP', async () => {
  await LoginPage.click_skip();
  await LoginPage.click_login_button();
  await LoginPage.click_country_field();
  await LoginPage.click_country_dropdown();
  await LoginPage.search_country_name(testData.existingUser.country);
  await LoginPage.select_desired_country();
  await LoginPage.click_phone_number_field();
  await LoginPage.enter_phone_number(testData.existingUser.phoneNumber);
  await LoginPage.click_continue_login_button();
  await LoginPage.enter_otp(testData.existingUser.otp);
  await LoginPage.click_continue_button();
});

When('The user selects the location and notifications permission from the popup', async () => {
  await LoginPage.select_device_location_permission();
  await LoginPage.click_allow_notifications();
});

Then('The user is successfully logged in to their account!', async () => {
  await expect(LoginPage.app_logo).toBeDisplayed();
});

When('The user clicks the profile icon, lands on the profile screen and proceeds to the settings page to logout', async () => {
  await LoginPage.click_profile_photo_button();
  await LoginPage.click_settings_button();
  await LoginPage.click_logout_button_and_proceed();
  // await LoginPage.click_logout_button_and_cancel();
});

Then('The user has successfully logged out!', async () => {
  await expect(LoginPage.main_login_button).toBeDisplayed();
})

When('The user tries to create a personal account', async () => {
  await LoginPage.click_create_personal_account_button();
  await LoginPage.click_country_field();
  await LoginPage.click_country_dropdown();
  await LoginPage.search_country_name(testData.existingUser.country);
  await LoginPage.select_desired_country();
  await LoginPage.click_phone_number_field();
  await LoginPage.enter_phone_number(testData.existingUser.phoneNumber);
  await LoginPage.click_register_personal_account_button();
  await LoginPage.enter_otp(testData.existingUser.otp);
  await LoginPage.click_personal_account_otp_continue_btn();
})

Then('The user is shown an error popup Account Already Exists', async () => {
  await expect(LoginPage.account_already_exists_heading).toBeDisplayed();
  await LoginPage.click_understood_button();
})




