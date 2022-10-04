import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // res.status(401).json({ ok: false, msg: 'No hay token en la petición' });
  res.json({ ok: true, msg: 'Todo bien id: 123123' });
});

app.listen(port, () => {
  console.log(`Example app listning at http://localhost:${port}`);
});
