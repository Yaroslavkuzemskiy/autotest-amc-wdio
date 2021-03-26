class LoginPage {

     get logIn(){
         return $('//*[@id="main-header"]//nav//div/a');
        
     }
     clickButton(){
         this.logIn.click();
         browser.pause(2000);
         const butto_login = $('#lwa_user_login');
         butto_login.setValue('amc');
         
         const butto_pwd = $('#lwa_user_pass');
         butto_pwd.setValue('K846ANd9C');

         const submit = $('#lwa_wp-submit');
         submit.click();
         
        
     }
}
module.exports = new LoginPage