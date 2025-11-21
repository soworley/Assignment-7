const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// middleware
app.use(cors());
app.use(express.json());   // OR bodyParser.json()

// ----- IN-MEMORY STORAGE -----
let recipes = [
  { id: 1, title: 'Pancakes' }
];

// Used by tests to reset data
app.__resetData = function (data) {
  recipes = data;
};

// ----- ROUTES -----

app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

app.get('/api/recipes/:id', (req, res) => {
  const id = Number(req.params.id);
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.json(recipe);
});

app.post('/api/recipes', (req, res) => {
  const id = recipes.length ? Math.max(...recipes.map(r => r.id)) + 1 : 1;
  const newRecipe = { id, ...req.body };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

// ----- SERVER STARTUP (only when run directly) -----

if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`API listening on ${port}`);
  });
}

module.exports = app;
