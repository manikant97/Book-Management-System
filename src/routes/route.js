const express = require('express');
const router = express.Router();

const { createUser ,getUser,loginUser} = require('../controllers/userController');

router.post('/users', createUser);
router.get('/getusers', getUser);
router.post('/login', loginUser);

module.exports = router;