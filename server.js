const express = require('express');
const { doWork } = require('./core');

const app = express();
app.get('/work', (req, res) => {
  const n = parseInt(req.query.n) || 200000;
  res.json({ result: doWork(n) });
});
app.listen(3000, () => console.log('listening on port 3000'));