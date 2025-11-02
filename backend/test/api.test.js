const request = require('supertest');
const app = require('../server'); // server must export the express app

describe('Backend API', () => {
  test('GET /api/recipes returns JSON array', async () => {
    const res = await request(app).get('/api/recipes');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/recipes adds a recipe', async () => {
    const newRecipe = { title: 'CI Test Recipe', ingredients: ['1 cup test'], instructions: 'Mix' };
    const post = await request(app).post('/api/recipes').send(newRecipe);
    expect(post.statusCode).toBe(201);
    const res = await request(app).get('/api/recipes');
    const found = res.body.find(r => r.title === 'CI Test Recipe');
    expect(found).toBeTruthy();
  });
});