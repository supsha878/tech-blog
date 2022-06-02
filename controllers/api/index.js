// import dependencies and routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

// set routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

// export routes
module.exports = router;