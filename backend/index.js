const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// const db = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'shop',
// });

app.get('/products', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM products');
  res.json(rows);
});

app.get('/products/:id', async (req, res) => {
  const productId = req.params.id;

  const [productRows] = await db.query(
    'SELECT * FROM products WHERE id = ?',
    [productId]
  );

  const [commentsRows] = await db.query(
    'SELECT * FROM comments WHERE product_id = ? ORDER BY created_at DESC;',
    [productId]
  );

  res.json({
    product: productRows[0],
    comments: commentsRows
  });
});

app.post('/comments', async (req, res) => {
  const { product_id, text } = req.body;

  const [result] = await db.query(
    'INSERT INTO comments (product_id, text) VALUES (?, ?)',
    [product_id, text]
  );

  const [rows] = await db.query(
    'SELECT * FROM comments WHERE id = ? ORDER BY created_at DESC;',
    [result.insertId]
  );

  res.json(rows[0]);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});