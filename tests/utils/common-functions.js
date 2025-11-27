export async function click_search_button(search_button) {
    await search_button.click();
}

export async function search_event(searchField, eventTitle) {
    await searchField.click();
    await searchField.setValue(eventTitle);
    await driver.execute('mobile: performEditorAction', { action: 'search' });  // best and official way to send Enter key to soft keyboard
}

export async function click_hamburger_icon(hamburger_icon) {
    await hamburger_icon.click();
}

export async function click_wallet_icon(wallet_icon) {
    await wallet_icon.click();
}

export async function open_event(select_event) {
        const events = await select_event; // array of elements
    await events[0].click();
    }