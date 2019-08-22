/* eslint-disable no-console */
/** Firebase setup for user auth provided here */
const firebase = require('firebase/app');
const admin = require('../firebase-admin/admin');
require('firebase/auth');

const db = admin.firestore();

const getSignUp = (req, res) => {
  res.render('signup');
};

const signUp = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      // Write the new user to users
      db.collection('users').doc(cred.user.uid)
        .set({
          email,
        });
      // TODO: create profile page
      res.render('profile');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/weak-password') {
        console.log('The password is too weak.');
      } else {
        console.log(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
};

module.exports = {
  getSignUp,
  signUp,
};
