// import dependencies
const router = require('express').Router();

// import routes
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

// set routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// export routes
module.exports = router;