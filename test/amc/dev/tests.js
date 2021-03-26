it('Page Home', () => {
    browser.url('https://amc-dev.bigdropinc.net/');
    browser.setTimeout({
        'pageLoad': 10000,
        'script': 90000});
    browser.setWindowSize(1980, 1050)
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
    fullPageScrollTimeout: 4000
})).toEqual(0);
    
    
    
})
 it('partnerships', () => {
     browser.url('https://amc-dev.bigdropinc.net/partnerships/');
     browser.setTimeout({
         'pageLoad': 10000,
         'script': 70000});
     browser.setWindowSize(1980, 1050)
     const popup = $("//div[@class='popup show']");
     const close_popup = $("//button[@class='close-popup']");
     popup.waitForExist({ timeout: 5000 });
     close_popup.click();
     browser.saveFullPageScreen('partnerships.png');
     // Check a full page screenshot
     expect(browser.checkFullPageScreen('partnerships.png', { hideElements: [
        $('//*[@id="main-content"]/section[1]/div[1]')
        
        // Same as for hideElements
       // removeElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
       // hideElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
    ] })).toEqual(0);
     browser.pause(2000);
    
    
 })
 it('premium', () => {
     browser.url('https://amc-dev.bigdropinc.net/premium-originals/');
     browser.setTimeout({
         'pageLoad': 10000,
         'script': 70000});
     browser.setWindowSize(1980, 1050)
     const popup = $("//div[@class='popup show']");
     const close_popup = $("//button[@class='close-popup']");
     popup.waitForExist({ timeout: 5000 });
     close_popup.click();
     browser.saveFullPageScreen('premium.png');
     // Check a full page screenshot
    expect(browser.checkFullPageScreen('premium.png', {hideElements: [
        $('//*[@id="main-content"]/section[1]/div[1]')
        
        // Same as for hideElements
       // removeElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
       // hideElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
    ],
    fullPageScrollTimeout: 4000 })).toEqual(0);
     browser.pause(2000);
 });
 it('premium calendar view', () => {
     browser.url('https://amc-dev.bigdropinc.net/premium-originals/?view=calendar');
    browser.setTimeout({
         'pageLoad': 10000,
         'script': 70000});
     browser.setWindowSize(1980, 1050)
    
     browser.saveFullPageScreen('premium-calendar.png');
     // Check a full page screenshot
     expect(browser.checkFullPageScreen('premium-calendar.png', { hideElements: [
        $('//*[@id="main-content"]/section[1]/div[1]')
        
        // Same as for hideElements
       // removeElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
       // hideElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
    ] })).toEqual(0);
    browser.pause(2000);
});
it('networks-digital', () => {
    browser.url('https://amc-dev.bigdropinc.net/amcn-digital/');
    browser.setTimeout({
        'pageLoad': 10000,
        'script': 70000});
    browser.setWindowSize(1980, 1050)
    browser.pause(2000);
    browser.saveFullPageScreen('networks-digital.png');
    // Check a full page screenshot
     expect(browser.checkFullPageScreen('networks-digital.png', { hideElements: [
        $('//*[@id="main-content"]/section[1]/div[1]')
        
        // Same as for hideElements
       // removeElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
       // hideElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
    ] })).toEqual(0);
    //browser.saveTabbablePage('networks-digital-tab.png');
    
 })