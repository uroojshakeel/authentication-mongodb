const { signup, login } = require('../Controllers/AuthControllers');
const { signupValidation, loginValidation } = require('../Middlewears/Authvaldatation');

const router = require('express').Router();



router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);


module.exports = router;