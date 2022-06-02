describe('shopping cart', ()=>{

    it('buy phone',()=>{
        //login correcto
        cy.visit('https://www.demoblaze.com/');
        cy.get('#login2').click(); 
        cy.wait(3000);
        cy.get('#loginusername').type('usuarioprueba02');
        cy.get('#loginpassword').type('passwordpreuba02');
        cy.xpath('//*[@id="logInModal"]/div/div/div[3]/button[2]').click();
        cy.get('#nameofuser').should('be.visible');
        //buy phone
        cy.xpath('/html/body/div[5]/div/div[1]/div/a[2]').click();
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn', {timeout:4000}).should('be.visible');
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();
    })

   


})