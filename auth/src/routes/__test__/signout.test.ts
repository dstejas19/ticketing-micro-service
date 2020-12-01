import { app } from '../../app';
import request from 'supertest';

it('success', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({ email: 'test@test.com', password: 'password' })
    .expect(200);

  const response = await request(app)
    .post('/api/users/signout')
    .send({})
    .expect(200);

  console.log(response.get('Set-Cookie'));
});
