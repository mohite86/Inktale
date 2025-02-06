/**
 * node modules
 */

const router = require('express').Router();

/**
 * custom modules
 */

const renderHome = require('../controllers/home_controller');

// GET route: Render the login form.
router.get(['/','/page/:pageNumber'], renderHome);

module.exports = router;