

class showFilters{
    open_filters() {
    browser.url('https://amc-dev.bigdropinc.net/premium-originals/');
    

    const filters = $("//a[normalize-space()='Show filter']");
    filters.click();
    browser.pause(2000);
    filters.scrollIntoView();

    browser.saveScreen('filters', { /* some options */ });
    // Check a screen
    expect(browser.checkScreen('filters', { /* some options */ })).toEqual(0);
    }
}
module.exports = new showFilters