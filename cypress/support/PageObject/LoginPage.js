class LoginPage {
    
    insertEmail(){
        return cy.get('input[id="userName"]');
    }

    insertPassword(){
        return cy.get('input[id="password"]');
    }

    clickLogin(){
        return cy.get('button[id="login"]')
    }

    getUsername(){
        return cy.get('label[id="userName-value"]');
    }
    clickLogoutButton(){
        cy.get('#books-wrapper > .text-right > #submit').click()
    }
}


export default  LoginPage;