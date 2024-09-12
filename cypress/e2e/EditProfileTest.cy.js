import Login from "../PageObject/LoginPage.js";
import EditProfilePage from "../PageObject/EditProfilePage.js";
/// <reference types="Cypress" />


describe('EditProfileTest', () =>
{
    const ln=new Login();
    const ep=new Login();

    it('LoginMobile', () => 
        {
            ln.openUnikon();
            ln.profileTab();
            ln.setMobileNo("9897123456")
            ln.clickContinueBtn();
            ln.setOtp();
        })

    it('EditMyProfile', () => 
        {
            ln.profileTab();
            ln.setMobileNo("9897123456")
            ln.clickContinueBtn();
            ln.setOtp();
        })

})