class LoginPage {
    // Locators
    get skip_button() {
        return $('id=com.orgonize.firstversion:id/skip_button');
    }

    get login_button() {
        return $('id=com.orgonize.firstversion:id/login_button');
    }

    get device_location_popup() {
        return $('id=com.android.permissioncontroller:id/permission_allow_foreground_only_button')
    }

    // get profile_photo_button() {
    //     return $('id=com.orgonize.firstversion:id/user_pic_app_bar')
    // }

    // get select_login_option_from_popup() {
    //     return $('id=com.orgonize.firstversion:id/button_g_ok')
    // }

    // get main_login_button() {
    //     return $('id=com.orgonize.firstversion:id/login')
    // }

    get country_field() {
        return $('id=com.orgonize.firstversion:id/rlClickConsumer')
    }

    get country_dropdown() {
        return $('id=com.orgonize.firstversion:id/editText_search')
    }

    get desired_country() {
        return $('id=com.orgonize.firstversion:id/textView_countryName')
    }

    get phone_number_field() {
        return $('id=com.orgonize.firstversion:id/number')
    }

    get continue_login_button() {
        return $('id=com.orgonize.firstversion:id/sms_button')
    }

    get otp_field() {
        return $('id=com.orgonize.firstversion:id/pinView')
    }

    get continue_button() {
        return $('id=com.orgonize.firstversion:id/enableLocationTxt');
    }

    get allow_notifications() {
        return $('id=com.android.permissioncontroller:id/permission_allow_button');
    }

    // get otp_continue_button() {
    //     return $('id=com.orgonize.firstversion:id/check_code')
    // }

    // get personal_account_icon() {
    //     return $(`android=new UiSelector().resourceId("com.orgonize.firstversion:id/layoutBackground").instance(0)`)
    // }

    // get personal_account_continue_button() {
    //     return $('id=com.orgonize.firstversion:id/contn')
    // }

    get app_logo() {
        return $('id=com.orgonize.firstversion:id/logo')
    }

    get settings_button() {
        return $('id=com.orgonize.firstversion:id/settingBtn')
    }

    get logout_button() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true))' + '.scrollIntoView(new UiSelector().resourceId("com.orgonize.firstversion:id/logout"));')
    }

    get confirm_logout_button() {
        return $('id=com.orgonize.firstversion:id/button_g_ok')
    }

    get cancel_logout_button() {
        return $('id=com.orgonize.firstversion:id/button_g_no')
    }

    get create_personal_account_button() {
        return $('id=com.orgonize.firstversion:id/signup')
    }

    get register_personal_account_button() {
        return $('id=com.orgonize.firstversion:id/sms_button')
    }

    get personal_account_otp_continue_btn() {
        return $('id=com.orgonize.firstversion:id/check_code')
    }

    get account_already_exists_heading() {
        return $('id=com.orgonize.firstversion:id/popup_w_heading')
    }

    get account_already_exists_understood_button() {
        return $('id=com.orgonize.firstversion:id/understood_button')
    }


    // Functions
    async click_skip() {
        await (await this.skip_button).click();
    }

    async click_login_button() {
        await (await this.login_button).click();
    }

    async select_device_location_permission() {
        await (await this.device_location_popup).click();
    }

    async click_profile_photo_button() {
        await (await this.profile_photo_button).click();
    }

    async select_login_from_popup() {
        await (await this.select_login_option_from_popup).click();
    }

    async click_main_login_button() {
        await (await this.main_login_button).click();
    }

    async click_country_field() {
        await (await this.country_field).click();
    }

    async click_country_dropdown() {
        await (await this.country_dropdown).click();
    }

    async search_country_name(country_name) {
        await (await this.country_dropdown).setValue(country_name);
    }

    async select_desired_country() {
        await (await this.desired_country).click();
    }

    async click_phone_number_field() {
        await (await this.phone_number_field).click();
    }

    async enter_phone_number(phone_number) {
        const field = await this.phone_number_field;
        await field.click();
        await field.clearValue();
        const digits = phone_number.split("");
        for (const d of digits) {
            await driver.pressKeyCode(7 + parseInt(d)); // 7 = KEYCODE_0
        }
    }

    async click_continue_login_button() {
        await (await this.continue_login_button).click();
    }

    async enter_otp(otp) {
        await (await this.otp_field).click();
        await (await this.otp_field).setValue(otp);
    }

    async click_continue_button() {
        // const button = await this.continue_button;
        // console.log(await button.isDisplayed());
        // console.log(await button.isEnabled());
        // await button.click();
        await (await this.continue_button).click();
    }

    async click_allow_notifications() {
        await (await this.allow_notifications).click();
    }


    // async click_otp_continue_button() {
    //     await (await this.otp_continue_button).click();
    // }

    // async select_account_to_login() {
    //     await (await this.personal_account_icon).click();
    // }

    // async click_personal_account_continue_button() {
    //     await (await this.personal_account_continue_button).click();
    // }

    // async closeCompetitionsPopupIfPresent() {
    //     try {
    //         const popupText = await $('//android.widget.TextView[contains(@text,"competitions")]');
    //         if (await popupText.isDisplayed()) {
    //             const closeIcon = await $('//android.widget.ImageView[contains(@resource-id,"close") or contains(@content-desc,"close")]');
    //             if (await closeIcon.isDisplayed()) {
    //                 await closeIcon.click();
    //                 console.log('Competitions popup closed with cross icon');
    //             } else {
    //                 console.log('Competitions popup found, but cross icon not located');
    //             }
    //         }
    //     } catch (err) {
    //         console.log('No competitions popup appeared');
    //     }
    // }

    async click_settings_button() {
        await (await this.settings_button).click();
    }

    async click_logout_button_and_proceed() {
        await (await this.logout_button).waitForDisplayed({ timeout: 100000 });
        await (await this.logout_button).click();
        await (await this.confirm_logout_button).click();
    }

    async click_logout_button_and_cancel() {
        await (await this.logout_button).waitForDisplayed({ timeout: 100000 });
        await (await this.logout_button).click();
        await (await this.cancel_logout_button).click();
    }

    async click_create_personal_account_button() {
        await (await this.create_personal_account_button).click();
    }

    async click_register_personal_account_button() {
        await (await this.register_personal_account_button).click();
    }

    async click_personal_account_otp_continue_btn() {
        await (await this.personal_account_otp_continue_btn).click();
    }
    async click_understood_button() {
        await (await this.account_already_exists_understood_button).click();
    }
}

export default new LoginPage();