

class showFilters{
    open_filters() {
    browser.url('https://www.amcnconnect.com/premium-originals/');
    browser.pause(2000);

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