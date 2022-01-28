/// <reference types="Cypress"/>
import LoginPage from '../../support/PageObject/LoginPage'
import Credentials from '../../support/CommonData/credentials.json'

describe('Login', () => {
    before(function() {   //Hitting base url before any validation
        cy.fixture('example').then(function(data){
            this.data = data;
            cy.visit('/login')    
        })
        
    })
    
    //Login Test Case
    it('Login into Demo QA', function(){
        const loginPage = new LoginPage
        cy.typeLogin({username: Credentials.username, password: Credentials.password})
        cy.get('button[id="login"]').click();
        loginPage.getUsername({timeout:5000}).should('have.text','testuser'); //Verifying the correct user has logged in
    })
  })
