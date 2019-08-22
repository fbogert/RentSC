const router = require('express').Router();

const { getSignUp, signUp } = require('../controllers/authCont');

router.route('/signup')
  .get(getSignUp)
  .post(signUp);

module.exports = router;
