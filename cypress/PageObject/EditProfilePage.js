/// <reference types="Cypress" />

class EditProfilePage
{
    txtFirstName='input[placeholder="First name"]';
    txtLastName='input[placeholder="Last name"]';
    txtDesignation='#designation'
    txt


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

    setOtp()
    {
        cy.get('input[aria-label="Please enter OTP character 1"]').type("1")

        cy.get('input[aria-label="Please enter OTP character 2"]').type("1")

        cy.get('input[aria-label="Please enter OTP character 3"]').type("1")
        
        cy.get('input[aria-label="Please enter OTP character 4"]').type("1")       
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
export default Login;