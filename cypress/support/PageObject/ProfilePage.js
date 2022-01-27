class ProiflePage{

    getLogoutButton(){
        return cy.get('button[id="submit"]').contains('Log out')
    }


}
export default ProiflePage