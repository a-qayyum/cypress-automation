class BookStorePage {
    
    getBookStorePage(){
        return cy.get('button[id="gotoStore"]')
    }

    getBookSearchBox(){
        return cy.get('input[id="searchBox"]');
    }

    getBook(){
        return cy.get('a[href="/books?book=9781449337711"]')
    }

    getAddBooktoCollection(){
        return cy.get('.text-right > #addNewRecordButton')
    }

    BookInProfile(){
        return cy.get('a[href="/profile?book=9781449337711"]')
    }
    
    DeleteBook(){
        return cy.get('span[id="delete-record-undefined"]')
    }
    ConfirmDeleteModal(){
        return cy.get('button[id="closeSmallModal-ok"]')
    }

}


export default  BookStorePage;