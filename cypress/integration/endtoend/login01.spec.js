describe('login end to end', ()=>{

    it('registrar usuario',()=>{

        cy.visit('https://www.demoblaze.com/');
        cy.xpath('//*[@id="signin2"]').click();
        cy.wait(3000);
        cy.xpath('//*[@id="sign-username"]').type('usuarioprueba02');
        cy.xpath('//*[@id="sign-password"]').type('passwordpreuba02');
        cy.xpath('//*[@id="signInModal"]/div/div/div[3]/button[2]').click();
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click();
        
    }) 

    it('login correcto',()=>{

        cy.get('#login2').click(); 
        cy.wait(3000);
        cy.get('#loginusername').type('usuarioprueba02');
        cy.get('#loginpassword').type('passwordpreuba02');
        cy.xpath('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();
        cy.get('#nameofuser').should('be.visible');
    })



    
    it('login out',()=>{
        cy.get('#logout2').click();
        cy.wait(2000);
        cy.get('#nameofuser').should('be.hidden')
    })

})