class BookFreeTicket_Page {

    get select_free_ticket_event() {
        return $$('id=com.orgonize.firstversion:id/main_layout');
    }
    
    async open_free_ticket_event() {
        const layouts = await this.select_free_ticket_event;
        await layouts[1].click();
    }
}

export default new BookFreeTicket_Page();