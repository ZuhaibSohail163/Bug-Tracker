/// <reference types="cypress" />
describe('Testing User Authentication',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/auth/register')
    })
    it('User Sign Up', () => {
        // Users Test Data
        let Users=[{
          FirstName:'Ali',
          LastName:'Abdullah',
          email:'ali@gmail.com',
          phoneNumber:'+923041442338',
          password:"11111111",
          confirmPassword:'11111111'
      },
      {
          FirstName:'Ahmed',
          LastName:'Noor',
          email:'ahmed@gmail.com',
          phoneNumber:'+923161442338',
          password:"12345678",
          confirmPassword:'12345678'
      },
      {
          FirstName:'Wehshi',
          LastName:'Zia',
          email:'wehshi@gmail.com',
          phoneNumber:'+923011442338',
          password:"11223344",
          confirmPassword:'11223344'
      }
      ]; 
        Users.map(user=>{
          cy.visit('http://localhost:3000/auth/register');
          cy.get('#firstName').type(user.FirstName);
          cy.get('#lastName').type(user.LastName);
          cy.get('#email').type(user.email);
          cy.get('#phone').type(user.phoneNumber);
          cy.get('#password').type(user.password);
          cy.get('#confirmPassword').type(user.confirmPassword);
          cy.get('.mt-4').click();
        })
      })

      it('User Login', ()=>{
        cy.visit("http://localhost:3000/auth/login");
        // User Test Data
        let Users=[{
          email:'ali@gmail.com',
          password:"11111111"
      },
      {
          email:'ahmed@gmail.com',
          password:"12345678",
      },
      {
          email:'wehshi@gmail.com',
          password:"11223344",
      }
      ]; 
        Users.map(user=>{
          cy.visit('http://localhost:3000/auth/login');
          cy.get('.mb-3 > .input-group-alternative > .form-control').type(user.email);
          cy.get(':nth-child(2) > .input-group-alternative > .form-control').type(user.password);
          cy.get('.my-4').click();
        })
      })

})