//npx wdio wdio.conf.js --spec=drew
//  reg-cli ./test/amc/main_screen/desktop_chrome/ ./test/amc/screen/actual/desktop_chrome/ ./test/amc/screen/diff1 -R ./test/amc/amc-report.html
//npm run de

const assert = require('assert');

const loginPage = require('./page/login.page');
const showFilters = require('./page/premium-filters.page');

const checkContentroom = require('./page/content-room.page');
const checkCasestudy = require('./page/case-study.page');
const checkCasestudydetail = require('./page/study-detail.page');
const checkNews = require('./page/news.page');
const checkApproach = require('./page/approach.page');

after(() => {
    
    const title = browser.getTitle();
    console.log('The title is : ------------------ ' + title);
}

 )
describe('regressive without log in', () => {
    require('./dev/tests');
});

describe('Log in ', () => {
    it('Log in AMC on show detail', () => {
        browser.url('https://amc-dev.bigdropinc.net/premium-originals/show-15-copy-copy/');
        browser.setTimeout({
            'pageLoad': 10000,
            'script': 70000});
        browser.setWindowSize(1980, 1050)
        loginPage.clickButton();
            browser.pause(3000);
            browser.saveFullPageScreen('show-detail.png');
            // Check a full page screenshot
            expect(browser.checkFullPageScreen('show-detail.png', { hideElements: [
                $('//*[@id="main-content"]/section[1]/div[1]')
                
                // Same as for hideElements
               // removeElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
               // hideElements: [$('//*[@id="main-content"]/section[1]/div[1]')]
            ] })).toEqual(0);
        });    
});
describe('Dashboard ', () => {
    it('check my acc', () => {
        browser.url('https://amc-dev.bigdropinc.net/my-account/');
        browser.setTimeout({
            'pageLoad': 10000,
            'script': 70000});
        browser.setWindowSize(1980, 1050);
        browser.saveFullPageScreen('My-acc.png');
         // Check a full page screenshot
         expect(browser.checkFullPageScreen('My-acc.png', { /* some options */ })).toEqual(0);
    });
});
    describe('Check filters ', () => {
        it('should have filters', () => {
           showFilters.open_filters();
        });

        it('Content room', () => {
            checkContentroom.save_screen_contentroom();
        });

        it('Case study', () => {
            checkCasestudy.save_screen_casestudy();
        });
        it('Case study detail', () => {
            checkCasestudydetail.save_screen_casestudydetail();
            
        });

        it('News', () => {
            checkNews.save_screen_news();
        });

        it('Approach', () => {
            checkApproach.save_screen_approach();
        });
});

