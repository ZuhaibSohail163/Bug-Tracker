/// <reference types="cypress" />
describe('Testing non Admin Features',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/login');
        cy.get('.one > .div > .inputa').type("wehshi@gmail.com");
        cy.get('.pass > .div > .inputa').type("123");
        cy.get('.btna').click();
    });
    it("Perform Functions", ()=>{
      cy.get('[href="/"] > li').click();
      cy.wait(1000);
      cy.get('[href="/about"] > li').click();
      cy.wait(1000);
      cy.get('[href="/"] > li').click();
      cy.wait(1000);
      cy.get('[href="/contactus"] > li').click();
      cy.wait(1000);
      cy.get('[href="/"] > li').click();
      cy.wait(1000);
      cy.get('[href="/shop"] > li').click();
      cy.wait(1000);
      cy.get('[href="/"] > li').click();
      cy.wait(1000);
      cy.get('.current > .content > a > .ShopNow').click();
      cy.wait(1000);
      cy.get('[href="/"] > li').click();
      cy.wait(1000);


      //HOME TO SHOP NOW
      cy.get('.current > .content > a > .ShopNow').click();

      //SHOP NOW
      cy.get('[href="/Shop?cg"]').click();
      cy.wait(2000);
      cy.get('[href="/Shop?cg=Men"]').click();
      cy.wait(2000);
      cy.get('[href="/Shop?cg=Women"]').click();
      cy.wait(2000);
      cy.get('[href="/Shop?cg=Watches"]').click();
      cy.wait(2000);
      cy.get('[href="/Shop?cg=Shoes"]').click();
      cy.wait(2000);
      cy.get('[href="/Shop?cg=Bag"]').click();
      cy.wait(2000);
      cy.get('[href="/Shop?cg"]').click();
      cy.wait(2000);

      
      cy.get(':nth-child(2) > :nth-child(3) > .QuickView').click();
      cy.wait(2000);
      
      cy.get('.chakra-textarea').clear();
      cy.get('.chakra-textarea').type("bohat acha aur fresh");
      cy.get('.purchase-info > .chakra-button').click();
      cy.wait(2000);

      //CHECKOUT
      cy.get('.chakra-select').click();
      cy.get('.chakra-select').select(5);
      cy.wait(3000);
      cy.get('[href="/"] > li').click();
      cy.wait(2000);
      // cy.get('.checkoutbtn').click();
      // cy.wait(2000);
      // cy.get('[href="/"] > li').click();
      // cy.wait(2000);

      //FILTER BUTTON
      cy.get('.filterbtn').click();
      cy.get(':nth-child(2) > #email').clear();
      cy.get(':nth-child(2) > #email').type("700");
      cy.wait(3000);
      cy.get(':nth-child(4) > #email').clear();
      cy.get(':nth-child(4) > #email').type("1200");
      cy.wait(3000);
      cy.get('.chakra-button').click();
      cy.wait(3000);

      //Search Button
      cy.get('.searchbtn').click();
      cy.wait(3000);
      cy.get('.Searcharea > .chakra-input').type('Wehshi{enter}');
      cy.wait(3000);

      //Categorical Search
      cy.get('ul > :nth-child(1) > a').click();
      cy.wait(3000);
      cy.get('[href="/"] > li').click();
      cy.wait(3000);
      cy.get('ul > :nth-child(2) > a').click();
      cy.wait(3000);
      cy.get(':nth-child(3) > a').click();
      cy.wait(3000);
      cy.get('ul > :nth-child(4) > a')
      cy.wait(3000);
      cy.get('[href="/"] > li').click();
      cy.wait(3000);
    })
      

})