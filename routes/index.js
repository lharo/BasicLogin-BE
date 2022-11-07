const express = require('express');

const { 
  signIn,
  signUp } = require('../controllers');

const router = express.Router();

router.post('/sign-in', signIn);
router.post('/signUp', signUp);

module.exports = {
  router
}