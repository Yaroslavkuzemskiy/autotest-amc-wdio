class choosetariffPlan {

   selectPlan(){
        const plan = $("//a[normalize-space()='3 GB Data']");
        plan.click();

        const total = $("//strong[@class='total-price']");
        expect(total).toHaveText('$37/month');

        const line = $("//div[@class='pick-plan-info']");
        line.scrollIntoView();

        browser.saveScreen('Total_3GB', { /* some options */ });
        // Check a screen
        expect(browser.checkScreen('Total_3GB', { /* some options */ })).toEqual(0);
   }
    
       
}
module.exports = new choosetariffPlan