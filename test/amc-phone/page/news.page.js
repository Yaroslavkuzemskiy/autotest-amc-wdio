class checkNews{
    save_screen_news() {
    browser.url('https://amc-dev.bigdropinc.net/news-press-releases/');
    browser.setTimeout({
        'pageLoad': 10000,
        'script': 70000});
    browser.setWindowSize(1980, 1050);
    browser.pause(2000);

   
   browser.saveFullPageScreen('news.png');
    // Check a full page screenshot
    expect(browser.checkFullPageScreen('news.png', { 
    fullPageScrollTimeout: 4000
 })).toEqual(0);

   
    }
}
module.exports = new checkNews;