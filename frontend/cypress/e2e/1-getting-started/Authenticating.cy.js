/// <reference types="cypress" />

describe('Testing User Authentication',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/register?redirect=/')
    })
    it('User Sign Up', () => {
        // Users Test Data
        let User=[{
          Name:'Ali Abdullah',
          email:'ali@gmail.com',
          password:"11111111",
          confirmPassword:'11111111'
      },
      {
        Name:'Ahmed Noor',
        email:'ahmed@gmail.com',
        password:"123",
        confirmPassword:'123'
    },
    {
        Name:'Wehshi Ali',
        email:'wehshi@gmail.com',
        password:"123",
        confirmPassword:'123'
    },
    ];
      User.map(user=>{
        cy.visit('http://localhost:3000/register?redirect=/');
        cy.get('.zz').type(user.Name);
        cy.get('.one').type(user.email);
        cy.get('.pass').type(user.password);
        cy.get('.passconf').type(user.confirmPassword);
        cy.get('.btna2').click();
      })
    })
    it('User Login', () => {
        let User=[{
          email:'ali@gmail.com',
          password:"11111111",
      }];
      User.map(user=>{
        cy.get('form > a').click();
        cy.get('.one > .div > .inputa').type(user.email);
        cy.get('.pass > .div > .inputa').type(user.password);
        cy.get('.btna').click();
      })
    })
    

})


















// /// <reference types="cypress" />

// describe('Testing User Authentication',()=>{
//     beforeEach(()=>{
//         cy.visit('http://localhost:3000/register?redirect=/')
//     })
//     it('User Sign Up', () => {
//         // Users Test Data
//         let User=[{
//           FirstName:'Ali',
//           LastName:'Abdullah',
//           email:'ali@gmail.com',
//           phoneNumber:'+923041442338',
//           password:"11111111",
//           confirmPassword:'11111111'
//       }]
// })
// })