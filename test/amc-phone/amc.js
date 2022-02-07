//npx wdio wdio.conf.js --spec=drew
//  reg-cli ./test/amc-phone/main_screen/desktop_chrome/ ./test/amc-phone/screen/actual/desktop_chrome/ ./test/amc-phone/screen/diff1 -R ./test/amc-phone/amc-phone-report.html
//npm run de

const assert = require('assert');


after(() => {
    
    const title = browser.getTitle();
    console.log('The title is : ------------------ ' + title);
}

 )
describe('regressive without log in', () => {
    require('./dev/tests');
});




