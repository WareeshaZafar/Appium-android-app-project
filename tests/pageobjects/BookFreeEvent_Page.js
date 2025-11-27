class BookFreeEvent_Page {

    // locators
    get search_button() {
        return $('id=com.orgonize.firstversion:id/search');
    }

    get type_in_search_field() {
        return $('id=com.orgonize.firstversion:id/edit_search');
    }

    get select_event() {
        return $$('id=com.orgonize.firstversion:id/main_layout');
    }

    get free_event_title() {
        return $('id=com.orgonize.firstversion:id/event_title');
    }

    get free_event_going_button() {
        return $('id=com.orgonize.firstversion:id/GoingBtn');
    }

    get free_event_interested_button() {
        return $('id=com.orgonize.firstversion:id/interestedBtn');
    }

    get show_profile_button() {
        return $('id=com.orgonize.firstversion:id/show_btn');
    }

    get hide_profile_button() {
        return $('id=com.orgonize.firstversion:id/hide_btn');
    }

    get confirm_selection_button() {
        return $('id=com.orgonize.firstversion:id/confirm_button');
    }

    get back_button() {
        return $('id=com.orgonize.firstversion:id/back_button');
    }

    get hamburger_icon() {
        return $('id=com.orgonize.firstversion:id/hamBurger');
    }

    get wallet_icon() {
        return $('id=com.orgonize.firstversion:id/wallet');
    }

    get free_event_title_inside_wallet() {
        return $('id=com.orgonize.firstversion:id/event_name');
    }


    // functions

    // async open_free_event() {
    //     const layouts = await this.select_free_event;
    //     await layouts[0].click();
    // }

    async click_going_button() {
        await (await this.free_event_going_button).click();
    }

    async click_show_profile_button() {
        await (await this.show_profile_button).click();
    }

    async click_confirm_selection_button() {
        await (await this.confirm_selection_button).click();
    }
    async click_back_button() {
        await (await this.back_button).click();
    }

    async search_inside_wallet(eventTitle) {
        const searchField = await this.type_in_search_field;
        await searchField.click();
        await searchField.setValue(eventTitle);
        await driver.execute('mobile: performEditorAction', { action: 'search' });
    }

}

export default new BookFreeEvent_Page();