const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
// TODO apiRoutes require ./api

router.use('/', homeRoutes);
// TODO use /api, apiRoutes

module.exports = router;