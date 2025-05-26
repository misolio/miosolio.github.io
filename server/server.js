// server/server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Firebase підключення (нічого тут не ініціалізуємо)
const { verifyToken } = require('./firebaseAdmin');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// React static
app.use(express.static(path.join(__dirname, '../build')));

// API
app.use('/api/recipes', require('./routes/recipes'));

// Всі інші маршрути -> React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
