const admin = require('firebase-admin');
const serviceAccount = require('../RentSC_fire_keys.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://rentsc-17c97.firebaseio.com',
});

module.exports = admin;
