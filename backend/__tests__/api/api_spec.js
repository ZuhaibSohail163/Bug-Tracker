const frisby = require('frisby');

//register
it ('POST should return a status of 201 Created', function () {
  return frisby
    .post('http://localhost:3000/register?redirect=/', {
      Name:'Ali Abdullah',
      email:'ali@gmail.com',
      password: "11111111",
      confirmPassword: '11111111'
    })
    .expect('status', 201);
});

//login
it ('POST should return a status of 201 Created', function () {
  return frisby
    .post('http://localhost:3000/login', {
      email:'ali@gmail.com',
      password: "11111111",
    })
    .expect('status', 201);
});

//UPDATE PROFILE
it ('POST should return a status of 200 OK', function () {
  return frisby
    .put('http://localhost:3000/profile', {
      Name: 'My Updated Name',
      email: 'updatted@gmail.com',
      password:'123',
      Confirmpassword:'123'
    })
    .expect('status', 200);
});

//SHOW PRODUCTS
it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('http://localhost:3000/Shop')
    .expect('status', 200);
});

//SHOW PRODUCTS WITH ADMIN
it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('http://localhost:3000/admin/productlist')
    .expect('status', 200);
});