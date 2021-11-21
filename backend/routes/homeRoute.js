const express = require('express');
const router = express.Router();
const {displayhome} = require('../controllers/homeController');

router.route("/home").get(displayhome);
module.exports = router;