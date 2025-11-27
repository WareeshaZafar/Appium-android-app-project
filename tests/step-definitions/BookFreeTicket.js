import { Given, When, Then } from '@wdio/cucumber-framework';
import assert from 'assert';
import BookFreeTicketPage from '../pageobjects/BookFreeTicket_Page';
import BookFreeEventPage from '../pageobjects/BookFreeEvent_Page';
import testData from '../data/bookEvents.json'
import * as commonFunctions from '../utils/common-functions'


When('The user searches and selects a free ticket event', async () => {
    await commonFunctions.click_search_button(BookFreeEventPage.search_button);
    await commonFunctions.search_event(
        BookFreeEventPage.type_in_search_field, 
        testData.FreeTicketData.eventTitle
    );
    await commonFunctions.open_event(BookFreeEventPage.select_event);

});