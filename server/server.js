const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(express.static('../public'));
app.use('/', express.static('public'));
app.use(express.json());

// Статичні файли React
app.use(express.static(path.join(__dirname, 'build')));

// API-роути
app.use('/api/recipes', require('./routes/recipes'));

// Всі інші запити перенаправляємо на React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
