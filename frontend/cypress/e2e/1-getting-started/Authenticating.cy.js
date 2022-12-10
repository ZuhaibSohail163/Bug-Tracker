/// <reference types="cypress" />

describe('Testing User Authentication',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/register?redirect=/')
    })
    it('User Sign Up', () => {
        // Users Test Data
        let User=[{
          FirstName:'Ali',
          LastName:'Abdullah',
          email:'ali@gmail.com',
          phoneNumber:'+923041442338',
          password:"11111111",
          confirmPassword:'11111111'
      }]


})
