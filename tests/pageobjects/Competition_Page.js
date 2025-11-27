class CompetitionPage {

    // Locators
    get skip_button() {
        return $('id=com.orgonize.firstversion:id/skip_button');
    }

    get explore_first_button() {
        return $('id=com.orgonize.firstversion:id/explore_first_button');
    }

    get enable_location() {
        return $('id=com.orgonize.firstversion:id/enableLocationTxt');
    }

    get device_location_popup() {
        return $('id=com.android.permissioncontroller:id/permission_allow_foreground_only_button')
    }

    get competition_icon() {
        return $('id=com.orgonize.firstversion:id/competition')
    }

    get lets_go_button() {
        return $(`android=new UiSelector().resourceId("com.orgonize.firstversion:id/lets_go")`)
    }
    get competition_title() {
        return $('id=com.orgonize.firstversion:id/competition_title')
    }

    get draw_time_in_days() {
        return $('id=com.orgonize.firstversion:id/day_count')
    }

    get draw_time_in_hours() {
        return $('id=com.orgonize.firstversion:id/hour_count')
    }

    get draw_time_in_minutes() {
        return $('id=com.orgonize.firstversion:id/min_count')
    }

    get draw_time_in_seconds() {
        return $('id=com.orgonize.firstversion:id/sec_count')
    }

    get competition_info_icon() {
        return $('id=com.orgonize.firstversion:id/info')
    }

    get entered_competition_count() {
        return $('id=com.orgonize.firstversion:id/enter_count')
    }

    get max_winners_count() {
        return $('id=com.orgonize.firstversion:id/max_winner_count')
    }

    get competition_details_heading() {
        return $('id=com.orgonize.firstversion:id/comp_detail_heading')
    }

    get competition_details_text() {
        return $('id=com.orgonize.firstversion:id/comp_details')
    }

    get competition_TnC_heading() {
        return $('id=com.orgonize.firstversion:id/terms_heading')
    }

    get competition_TnC_text() {
        return $('id=com.orgonize.firstversion:id/comp_terms')
    }

    get contact_number_icon() {
        return $('id=com.orgonize.firstversion:id/number_icon')
    }

    get email_icon() {
        return $('id=com.orgonize.firstversion:id/email_icon')
    }

    get website_icon() {
        return $('id=com.orgonize.firstversion:id/website_icon')
    }

    get welcome_to_gmail_screen() {
        return $('id=com.google.android.gm:id/welcome_tour_title')
    }

    get skip_button_gmail_screen() {
        return $('id=com.google.android.gm:id/welcome_tour_skip')
    }
    
    get website_icon() {
        return $('id=com.orgonize.firstversion:id/website_icon')
    }



    // Functions
    async click_skip() {
        await (await this.skip_button).click();
    }

    async click_explore_first_button() {
        await (await this.explore_first_button).click();
    }

    async click_enable_location() {
        await (await this.enable_location).click();
    }

    async select_device_location_permission() {
        await (await this.device_location_popup).click();
    }

    async click_competition_icon() {
        await (await this.competition_icon).click();
    }

    async click_lets_go_button() {
        await (await this.lets_go_button).click();
    }

    async find_competition_by_text(targetText) {
        const targetResourceId = 'com.orgonize.firstversion:id/competition_title';
        for (let i = 0; i < 80; i++) {
            const elements = await $$(`id=${targetResourceId}`);
            for (const el of elements) {
                const text = await el.getText();
                if (text.trim() === targetText) {
                    console.log(`✅ Found competition: ${text}`);
                    await el.click();
                    return;
                }
            }
            await driver.execute('mobile: scrollGesture', {
                left: 200,
                top: 600,
                width: 700,
                height: 1000,
                direction: 'down',
                percent: 2
            });
        }
    }

    async get_draw_time_in_days() {
        const days = await (await this.draw_time_in_days).getText();
        const hours = await (await this.draw_time_in_hours).getText();
        const mins = await (await this.draw_time_in_minutes).getText();
        const sec = await (await this.draw_time_in_seconds).getText();
        return { days, hours, mins, sec };
    }

    async get_entered_competition_count() {
        const text = await (await this.entered_competition_count).getText();
        const parsedText = text.match(/-?\d+/); // negative sign and integer value both being parsed
        if (!parsedText) {
            throw new Error(`No number found in: "${text}"`);
        }
        const count = Number(parsedText[0]); // convert the extracted string to number
        return count;
    }

    async get_max_winners_count() {
        const text = await (await this.max_winners_count).getText();
        const parsedText = text.match(/-?\d+/); // negative sign and integer value both being parsed
        if (!parsedText) {
            throw new Error(`No number found in: "${text}"`);
        }
        const count = Number(parsedText[0]); // convert the extracted string to number
        return count;
    }

    async click_competition_info_icon() {
        await (await this.competition_info_icon).click();
    }
    
    async get_competition_details_text() {
        await (await this.competition_details_heading).click();
        await (await this.competition_details_text).getText();
    }

    async get_competition_TnC_text() {
        await (await this.competition_TnC_heading).click();
        await (await this.competition_TnC_text).getText();
    }

    async click_contact_number_icon() {
        await (await this.contact_number_icon).click();
    }

    async click_email_icon() {
        await (await this.email_icon).click();
    }

    async click_website_icon() {
        await (await this.website_icon).click();
    }

    async send_email(){
        // await (await this.email_icon).click();

    }

}

export default new CompetitionPage();
