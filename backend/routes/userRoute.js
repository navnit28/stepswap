const express = require('express');
const router = express.Router();
const {createUser , getAllUsers} = require('../controllers/userController');

router.route("/user/register").post(createUser);
router.route("/users").get(getAllUsers);
module.exports = router;