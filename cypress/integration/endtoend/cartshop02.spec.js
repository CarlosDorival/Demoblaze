describe('shopping cart', ()=>{

    it('buy phone',()=>{
        //login correcto
        cy.visit('https://www.demoblaze.com/');
        cy.get('#login2').click(); 
        cy.wait(1000);
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
        cy.get('.col-lg-1 > .btn').click();
        cy.wait(1000);
        //place order
        cy.get('#name').type('name test');
        cy.get('#country').type('country test');
        cy.get('#city').type('city test');
        cy.get('#card').type('123456789');
        cy.get('#month').type('5');
        cy.get('#year').type('2022');
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(1000);
        cy.get('.confirm').should('be.visible').click();
    })

    it('buy laptop',()=>{
        //buy phone
        cy.xpath('/html/body/div[5]/div/div[1]/div/a[3]').click();
        cy.get(':nth-child(5) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn', {timeout:4000}).should('be.visible');
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();
        cy.get('.col-lg-1 > .btn').click();
        cy.wait(1000);
        //place order
        cy.get('#name').type('name test');
        cy.get('#country').type('country test01');
        cy.get('#city').type('city test01');
        cy.get('#card').type('123456789');
        cy.get('#month').type('5');
        cy.get('#year').type('2022');
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(1000);
        cy.get('.confirm').should('be.visible').click();
    })


})