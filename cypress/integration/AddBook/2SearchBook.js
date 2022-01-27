/// <reference types="Cypress"/>
import BookStorePage from "../../support/PageObject/BookStorePage";
import bookName from "../../support/CommonData/Bookname.json"
import ProfilePage from "../../support/PageObject/ProfilePage"
import ProiflePage from "../../support/PageObject/ProfilePage";

const bookpage = new BookStorePage();   
const profilepage = new ProfilePage();

describe('Searching for a book...',()=>{
    after(function() {
        it('Delete book from Profile', ()=>{
            cy.visit('/profile')
            profilepage.getLogoutButton().click()
            
        })
    
      
      })
    it('Go to Book Store', ()=>{   
        bookpage.getBookStorePage().click();
    })

    it('Search a specific book', ()=>{   
        bookpage.getBookSearchBox().type(bookName.book1);
    })
 
    it('Select a Book',()=>{
        bookpage.getBook().click({force: true});
    })

    it('Add Book to your collection',()=>{
        bookpage.getAddBooktoCollection().click();
        
    })

    it('Verify Book has been added',()=>{
        cy.visit('/profile')
        bookpage.BookInProfile().should('have.text', bookName.book1);
        
    })

    it('Delete Book from profile', ()=>{
        bookpage.DeleteBook().click()
        bookpage.ConfirmDeleteModal().click()
    })
    it('Logout', ()=>{
        profilepage.getLogoutButton().click()

    })
     
})