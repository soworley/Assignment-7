const express = require('express');
const app = express();
app.use(express.json());

let recipes = [
  { id: 1, title: 'Pancakes' }
];

app.get('/api/recipes', (req, res) => res.json(recipes));
app.get('/api/recipes/:id', (req, res) => {
  const r = recipes.find(x => x.id === +req.params.id);
  if (!r) return res.status(404).json({ error: 'Not found' });
  res.json(r);
});
app.post('/api/recipes', (req, res) => {
  const next = recipes.length + 1;
  const newR = { id: next, ...req.body };
  recipes.push(newR);
  res.status(201).json(newR);
});

if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => console.log(`API listening ${port}`));
}
module.exports = app;
