class planPage {

   
    openPlanPage(){
        browser.url('http://optimummobiledev.prod.acquia-sites.com/plan');
        browser.setTimeout({
            'pageLoad': 10000,
            'script': 90000});
        browser.setWindowSize(1980, 1050)
        browser.pause(2000);
        
        const line_1 = $("//a[normalize-space()='3 GB Data']"); 
        line_1.waitForExist({ timeout: 6000 });
        expect(line_1).toHaveText('3 GB Data');

        //if(!line_1.isExisting()){
          //  throw new Error('API does not work for plans')
      //  }

        browser.saveScreen('Line_1', { /* some options */ });
        // Check a screen
        expect(browser.checkScreen('Line_1', { /* some options */ })).toEqual(0);
        
    }
}
module.exports = new planPage