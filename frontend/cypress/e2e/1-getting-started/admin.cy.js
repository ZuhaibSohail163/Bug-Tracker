import { getDefaultNormalizer } from "@testing-library/react";

describe('Testing User Functionalities',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/login');
        cy.get('.one > .div > .inputa').type("ali@gmail.com");
        cy.get('.pass > .div > .inputa').type("11111111");
        cy.get('.btna').click();
    });
    it('Edit Profile', () => {
        // Users Test Data
        let User=[{
          Name:'saifiwela',
          password:'11111111',
          confirmPassword:'11111111',
      }];
      User.map(user=>{
        cy.get('.ic_sett_dis > a').click();
        cy.get('.zz').clear();
        cy.get('.zz').type(user.Name);
        cy.get('.pass').type(user.password);
        cy.get('.passconf > .div > .inputa').type(user.confirmPassword);
        cy.get('.btna2').click();
        cy.get('.showbtn').click();
        cy.wait(1000);
        cy.get('.showbtn').click();
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

       // USER
        cy.get('#menu-button-5').click();
        cy.wait(1000);
        cy.get('#menu-list-5-menuitem-1 > a').click();
        cy.wait(3000);
        
        // USER EDIT
        cy.get(':nth-child(2) > :nth-child(5) > .chakra-stack > a > .chakra-button').click();
        cy.wait(1000);
        cy.get('.zz > .div > .chakra-input__group > .chakra-input').clear();
        cy.get('.zz > .div > .chakra-input__group > .chakra-input').type("yo wehshi")
        cy.wait(3000);
        cy.get('.one > .div > .chakra-input__group > .chakra-input').clear();
        cy.get('.one > .div > .chakra-input__group > .chakra-input').type("yowehshi@gmail.com");
        cy.wait(3000);
        cy.get('.chakra-checkbox__control').click();
        cy.wait(3000);
        cy.get('.btna2').click();
        cy.wait(3000);

        // USER DELETE
        cy.get(':nth-child(2) > :nth-child(5) > .chakra-stack > .css-1nyjmws').click();
        cy.wait(1000);
        cy.get('[href="/"] > li').click();
        cy.wait(1000);

        // PRODUCTS
        cy.get('#menu-button-5').click();
        cy.wait(1000);
        cy.get('#menu-list-5-menuitem-2 > a').click();
        cy.wait(2000);

        // ADD PRODUCT
        cy.get('.ADDBUTTON > .chakra-button__icon > svg').click();
        cy.wait(2000);
        cy.get('.zz > .div > .chakra-input__group > .chakra-input').clear();
        cy.wait(1000);
        cy.get('.zz > .div > .chakra-input__group > .chakra-input').type("Monkey");
        cy.get(':nth-child(2) > .div > .chakra-input__group > .chakra-input').clear();
        cy.wait(1000);
        cy.get(':nth-child(2) > .div > .chakra-input__group > .chakra-input').type("1000");
        cy.get(':nth-child(3) > .div > .chakra-input__group > .chakra-input').clear();
        cy.wait(1000);
        cy.get(':nth-child(3) > .div > .chakra-input__group > .chakra-input').type("50000");
        cy.get('.chakra-textarea').clear();
        cy.wait(1000);
        cy.get('.chakra-textarea').type("kale patlay ghanay lambay daant wale");
        cy.get('.css-egoftb > .chakra-stack > :nth-child(2) > .chakra-checkbox__control')
        cy.get('.css-egoftb > .chakra-stack > :nth-child(1) > .chakra-checkbox__control')
        cy.get('.div > .chakra-stack > :nth-child(4) > .chakra-checkbox__label').click();
        cy.get('.css-0 > .chakra-stack > :nth-child(1)').clear();
        cy.wait(1000);
        cy.get('.css-0 > .chakra-stack > :nth-child(1)').type("https://news.berkeley.edu/wp-content/uploads/2016/07/baboonteeth410.jpg");
        cy.get('.css-0 > .chakra-stack > :nth-child(2)').clear();
        cy.wait(1000);
        cy.get('.css-0 > .chakra-stack > :nth-child(2)').type("https://media.istockphoto.com/id/1207369854/photo/scary-yawn.jpg?s=612x612&w=0&k=20&c=oc5bYOwiI0IN2MVasJeSuEBUmh4rR0joaGupA84K-P8=");
        cy.get('.css-0 > .chakra-stack > :nth-child(3)').clear();
        cy.wait(1000);
        cy.get('.css-0 > .chakra-stack > :nth-child(3)').type("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiBCr2Z-mvnAQRSt2zdDB7RuDKqTAuaiSt2pJu8KAfvT5B8Zs0o7Y6N4gQSTmIweqCUw&usqp=CAU");
        cy.get('.btna2').click();
        cy.wait(1000);


        //EDIT PRODUCT
        cy.get(':nth-child(1) > :nth-child(5) > .chakra-stack > a > .chakra-button').click();
        cy.wait(2000);
        cy.get('.zz > .div > .chakra-input__group > .chakra-input').clear();
        cy.wait(1000);
        cy.get('.zz > .div > .chakra-input__group > .chakra-input').type("aalo");
        cy.get(':nth-child(2) > .div > .chakra-input__group > .chakra-input').clear();
        cy.wait(1000);
        cy.get(':nth-child(2) > .div > .chakra-input__group > .chakra-input').type("1000");
        cy.get(':nth-child(3) > .div > .chakra-input__group > .chakra-input').clear();
        cy.wait(1000);
        cy.get(':nth-child(3) > .div > .chakra-input__group > .chakra-input').type("50000");
        cy.get('.chakra-textarea').clear();
        cy.wait(1000);
        cy.get('.chakra-textarea').type("meethe aur silly aalo");
        cy.get('.css-egoftb > .chakra-stack > :nth-child(3) > .chakra-checkbox__control')
        cy.get('.css-egoftb > .chakra-stack > :nth-child(1) > .chakra-checkbox__control')
        cy.get('.div > .chakra-stack > :nth-child(4) > .chakra-checkbox__label').click();
        cy.get('.css-0 > .chakra-stack > :nth-child(1)').clear();
        cy.wait(1000);
        cy.get('.css-0 > .chakra-stack > :nth-child(1)').type("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkr0hpNN_QSr8fx_MXNfIiQwLOz294KLwKnnFJgTJHxmf9ZULQiVA97jGelfthQxlu6AM&usqp=CAU");
        cy.get('.btna2').click();
        cy.wait(1000);

        //DELETE PRODUCT
        cy.get(':nth-child(1) > :nth-child(5) > .chakra-stack > .css-1nyjmws')
        cy.wait(2000);

    });
    })

})