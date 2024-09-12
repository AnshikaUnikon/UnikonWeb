import LoginPage from "../PageObject/LoginPage.js";
/// <reference types="Cypress" />

describe('LoginAppTest', () => 
{
  
    it('LoginMobile', () => 
        {
            const ln=new LoginPage();
            ln.openUnikon();
            ln.profileTab();
            ln.setMobileNo("9897123456")
            ln.clickContinueBtn();
            ln.setOtp("1111");
        })
    
})