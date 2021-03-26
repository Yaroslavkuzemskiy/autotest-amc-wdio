
class checkCasestudydetail{
    save_screen_casestudydetail() {
    browser.url('https://amc-dev.bigdropinc.net/case-studies/');
    browser.setTimeout({
        'pageLoad': 10000,
        'script': 70000});
    browser.setWindowSize(1980, 1050);
    browser.pause(2000);

   const post_tile = $('//*[@id="main-content"]/div[1]/div/div/div[1]/div[1]/div/a');
   post_tile.click();

   browser.saveFullPageScreen('casestudy-detail.png');
    // Check a full page screenshot
    expect(browser.checkFullPageScreen('casestudy-detail.png', { hideElements: [
        $('//*[@id="main-content"]/section[1]/div[1]')
        
        // Same as for hideElements
       // removeElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
       // hideElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
    ],
    fullPageScrollTimeout: 4000
 })).toEqual(0);

   
    }
}
module.exports = new checkCasestudydetail;