const frisby = require('frisby');

const frisby = require('frisby');

it ('POST should return a status of 201 Created', function () {
  return frisby
    .post('localhost:3000/auth/register', {
      first_name: 'saifi',
      last_name: 'billa',
      phone: '101210201',
      email: 'saifi@gmail.com',
      password: '12345',
    })
    .expect('status', 201);
});