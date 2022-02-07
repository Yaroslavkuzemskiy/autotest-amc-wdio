const assert = require('assert');
const planPage = require('./page/plan.page');
const choosetariffPlan = require('./page/select_plan.page');
const getstartedButton = require('./page/get_started.page');


describe('User can take Tariff Package', () => {
    it('I am on Plan page', () => {
        planPage.openPlanPage();
    });

    it('For Line 1 I choose tariff <3GB Data $20/mo>', () => {
        choosetariffPlan.selectPlan();
    });

    it('I redirected to Verefication page', () => {
        getstartedButton.getStarted();
    });

     
});