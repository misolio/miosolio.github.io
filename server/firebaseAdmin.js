const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}


const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Немає токена авторизації' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // req.user.uid доступний у всіх маршрутах
    next();
  } catch (err) {
    res.status(403).json({ error: 'Недійсний токен' });
  }
};

module.exports = { admin, verifyToken };
