var express = require('express');
var router = express.Router();

const UserRouter = require('./UserRouter')

router.use('/api/users', UserRouter);

module.exports = router;
