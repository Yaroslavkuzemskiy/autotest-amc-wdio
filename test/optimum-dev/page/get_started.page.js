class getstartedButton {

   getStarted(){
       const getstartedbutton = $("//button[contains(text(),'Get Started with')]");
       if(!getstartedbutton.isExisting()){
          throw new Error('No buttons on the page')
      }
       getstartedbutton.click();

       expect(browser).toHaveUrlContaining('verification');
       browser.pause(2000);
       browser.saveScreen('verification', { /* some options */ });
       // Check a screen
       expect(browser.checkScreen('verification', { /* some options */ })).toEqual(0);
   }
     
        
 }
 module.exports = new getstartedButton