class checkContentroom{
    save_screen_contentroom() {
    browser.url('https://www.amcnconnect.com/content-room/');
    browser.setTimeout({
        'pageLoad': 10000,
        'script': 70000});
    browser.setWindowSize(1980, 1050);

   

    browser.saveFullPageScreen('content-room.png');
    // Check a full page screenshot
    expect(browser.checkFullPageScreen('content-room.png', { hideElements: [
        $('//*[@id="main-content"]/section[1]/div[1]')
        
        // Same as for hideElements
       // removeElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
       // hideElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
    ],
    fullPageScrollTimeout: 4000
})).toEqual(0);
    }
}
module.exports = new checkContentroom;