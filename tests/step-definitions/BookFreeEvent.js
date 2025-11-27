import { Given, When, Then } from '@wdio/cucumber-framework';
import assert from 'assert';
import BookFreeEventPage from '../pageobjects/BookFreeEvent_Page';
import testData from '../data/bookEvents.json'
import * as commonFunctions from '../utils/common-functions'


When('The user searches and selects a free event', async () => {
    await commonFunctions.click_search_button(BookFreeEventPage.search_button);
    await commonFunctions.search_event(
        BookFreeEventPage.type_in_search_field, 
        testData.FreeEventData.eventTitle
    );
    await commonFunctions.open_event(BookFreeEventPage.select_event);
});

Then('The free event detail page opens', async () => {
    const eventTitle = await BookFreeEventPage.free_event_title.getText();
    assert.strictEqual(eventTitle, testData.FreeEventData.eventTitle);
});

When('The user clicks the Going button and chooses to show their profile to everyone', async () => {
    await BookFreeEventPage.click_going_button();
    await BookFreeEventPage.click_show_profile_button(); 
    await BookFreeEventPage.click_confirm_selection_button(); 
});

When('The user goes to their wallet', async () => {
    await BookFreeEventPage.click_back_button();
    await commonFunctions.click_hamburger_icon(BookFreeEventPage.hamburger_icon);
    await commonFunctions.click_wallet_icon(BookFreeEventPage.wallet_icon);
});

When('The user finds the same free event in their wallet', async () => {
    await commonFunctions.click_search_button(BookFreeEventPage.search_button);
    await commonFunctions.search_event(
        BookFreeEventPage.type_in_search_field,
        testData.FreeEventData.eventTitleInWallet
    );
    const eventTitleInWallet = await BookFreeEventPage.free_event_title_inside_wallet.getText();
    assert.strictEqual(eventTitleInWallet, testData.FreeEventData.eventTitleInWallet);
});

