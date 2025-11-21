const request = require('supertest');
const app = require('../server');

describe('Recipes API', () => {
  test('GET /api/recipes returns list', async () => {
    const res = await request(app).get('/api/recipes');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/recipes creates recipe', async () => {
    const res = await request(app)
      .post('/api/recipes')
      .send({ title: 'Test Dish' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Dish');
  });

  test('GET /api/recipes/:id 404 for missing', async () => {
    const res = await request(app).get('/api/recipes/9999');
    expect(res.statusCode).toBe(404);
  });
});
