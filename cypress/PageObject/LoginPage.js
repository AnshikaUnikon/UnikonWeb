/// <reference types="Cypress" />

class LoginPage
{
    openUnikon()
    {
        cy.visit('https://app.qa.unikon.dev/')
        cy.viewport(350, 680)
        cy.viewport('iphone-x')

        cy.get(".w-4.h-4.text-white.absolute.right-0").click()
    }
    profileTab()
    {
        cy.get('[class*="bg-[#0A070B]"] > .w-full > :nth-child(4)').click()
    }
    
    setMobileNo(mobileno)
    {
        cy.get('input[placeholder="Enter Phone Number"]').type(mobileno)
    }

    setOtp(otp)
    {
        cy.get('input[aria-label="Please enter OTP character 1"]').type(otp) 
    }

    clickContinueBtn(continuebtn)
    {
        cy.get('button').contains('Continue').click()
    }

    verifyLogin()
    {
        cy.get('input[placeholder="Enter Phone Number"]').should('have.text', '')
    }
}
export default LoginPage;