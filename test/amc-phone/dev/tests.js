it('Page Home', () => {
    browser.url('https://amc-dev.bigdropinc.net/');
    browser.setTimeout({
        'pageLoad': 10000,
        'script': 90000});
        
    
    browser.pause(2000);
    
    const popup = $("//div[@class='popup show']");
    const close_popup = $("//button[@class='close-popup']");
    popup.waitForExist({ timeout: 5000 });
    close_popup.click();
    browser.saveFullPageScreen('Home.png');
    // Check a full page screenshot
    
    expect(browser.checkFullPageScreen('Home.png', {  hideElements: [
        $('//*[@id="main-content"]/section[1]/div[1]')
        
        // Same as for hideElements
       // removeElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
       // hideElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
    ] ,
    hideAfterFirstScroll: [
        $("//header[@id='main-header']"),
      ],
    fullPageScrollTimeout: 4000
})).toEqual(0);
    
    
    
})
 